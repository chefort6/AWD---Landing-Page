function changeBoxColor(color) {
    var box = document.getElementById('transitionBox');

    box.style.top = '-700px';
    box.style.backgroundColor = color;
    box.classList.add('box-transition');

    setTimeout(function() {
        box.style.top = 'calc(50% - 250px)';
    }, 300);

    setTimeout(function() {
        box.classList.remove('box-transition');
    }, 550); 
}

function handleButtonClick(btnClass, color) {
    changeBoxColor(color);

    var box = document.querySelector('.box');
    box.style.borderColor = color;
}
