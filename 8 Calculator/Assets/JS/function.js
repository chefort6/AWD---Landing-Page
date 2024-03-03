const output = document.querySelector('.calculator__output');
const keys = document.querySelector('.calculator__keys');

let currentInput = '0';
let previousInput = '';
let operator = '';
let isOperatorClicked = false;

function appendNumber(number) {
  if (currentInput === '0' || isOperatorClicked) {
    currentInput = number;
    isOperatorClicked = false;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function handleOperator(operatorValue) {
  if (previousInput !== '') {
    calculate();
    previousInput = currentInput;
  } else {
    previousInput = currentInput;
  }

  operator = operatorValue;
  isOperatorClicked = true;
}

function calculate() {
  let result;
  const previous = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      result = previous / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  previousInput = '';
  operator = '';
  updateDisplay();
}

function clearCalculator() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    isOperatorClicked = false;
    updateDisplay();
}

function backspace() {
  currentInput = currentInput.slice(0, -1) || '0';
  updateDisplay();
}

function updateDisplay() {
  output.textContent = currentInput;
}
