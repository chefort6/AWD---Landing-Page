const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

document.addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.play();
});

let btnNo = document.querySelector('.btn:nth-child(2)'); 
let position;
btnNo.addEventListener("mouseover", function() {
    position ? (position = 0) : (position = 150);
    btnNo.style.transform = `translate(${position}px, 0px)`;
    btnNo.style.transition = "all 0.3s";
});
document.addEventListener('DOMContentLoaded', function () {  
    let btnYes = document.querySelector('.yes-btn');
    btnYes.addEventListener('click', function() {
        document.body.style.backgroundImage = 'url(https://media1.tenor.com/m/0SSUr4x0EsMAAAAC/cantwait-milkandmocha.gif)';
        
    });
});