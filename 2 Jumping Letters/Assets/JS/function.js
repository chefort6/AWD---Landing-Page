const letters = document.querySelectorAll('.letter');
const body = document.body;

letters.forEach((letter) => {
    letter.addEventListener('click', () => {
        body.style.backgroundColor = getLetterColor(letter.id);
        letter.classList.toggle('active');
    });
});

function getLetterColor(letterId) {
    switch (letterId) {
        case '_letter1':
            return '#c76363';
        case '_letter2':
            return '#78c078';
        case '_letter3':
            return '#7a7ab4';
        case '_letter4':
            return '#d8da5e';
        case '_letter5':
            return '#258dce';
        case '_letter6':
            return '#d37323';
        case '_letter7':
            return '#26ecdb';
        default:
            return 'black';
    }
}
