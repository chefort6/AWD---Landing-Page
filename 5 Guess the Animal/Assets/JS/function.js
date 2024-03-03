document.addEventListener('DOMContentLoaded', function() {
    const buttonsGame1 = document.querySelectorAll('.container:not(.second-game):not(.third-game) .btn');
    const realPictureGame1 = document.querySelector('.container:not(.second-game):not(.third-game) .real_picture');
    const correctAnsGame1 = document.querySelector('.container:not(.second-game):not(.third-game) .correct_ans');

    buttonsGame1.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('correct') && !this.classList.contains('wrong')) {
                const selectedOption = this.innerText;

                if (selectedOption === 'Cat') {
                    this.classList.add('correct');
                    this.style.backgroundColor = 'green';
                    this.style.color = 'white';
                } else {
                    this.classList.add('wrong');
                    this.style.backgroundColor = 'red';
                    this.style.color = 'white';
                }

                buttonsGame1.forEach(otherButton => {
                    if (otherButton !== this) {
                        otherButton.classList.add('disabled');
                    }
                });

                realPictureGame1.style.display = 'block';
                correctAnsGame1.style.display = 'block';
            }
        });
    });

    const buttonsGame2 = document.querySelectorAll('.second-game .btn');
    const realPictureGame2 = document.querySelector('.second-game .rp2');
    const correctAnsGame2 = document.querySelector('.second-game .ca2');

    buttonsGame2.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('correct') && !this.classList.contains('wrong')) {
                const selectedOption = this.innerText;

                if (selectedOption === 'Dog') {
                    this.classList.add('correct');
                    this.style.backgroundColor = 'green';
                    this.style.color = 'white';
                } else {
                    this.classList.add('wrong');
                    this.style.backgroundColor = 'red';
                    this.style.color = 'white';
                }

                buttonsGame2.forEach(otherButton => {
                    if (otherButton !== this) {
                        otherButton.classList.add('disabled');
                    }
                });

                realPictureGame2.style.display = 'block';
                correctAnsGame2.style.display = 'block';
            }
        });
    });

    const buttonsGame3 = document.querySelectorAll('.third-game .btn');
    const realPictureGame3 = document.querySelector('.third-game .rp3');
    const correctAnsGame3 = document.querySelector('.third-game .ca3');

    buttonsGame3.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('correct') && !this.classList.contains('wrong')) {
                const selectedOption = this.innerText;

                if (selectedOption === 'Seal') {
                    this.classList.add('correct');
                    this.style.backgroundColor = 'green';
                    this.style.color = 'white';
                } else {
                    this.classList.add('wrong');
                    this.style.backgroundColor = 'red';
                    this.style.color = 'white';
                }

                buttonsGame3.forEach(otherButton => {
                    if (otherButton !== this) {
                        otherButton.classList.add('disabled');
                    }
                });

                realPictureGame3.style.display = 'block';
                correctAnsGame3.style.display = 'block';
            }
        });
    });
});
