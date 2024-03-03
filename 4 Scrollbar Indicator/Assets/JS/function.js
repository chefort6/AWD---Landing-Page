const scrollIndicator = document.getElementById('scrollIndicator');
const totalScrollHeight = document.body.scrollHeight - window.innerHeight;

function updateScrollIndicator() {
    const scrollPercentage = (window.scrollY / totalScrollHeight) * 100;
    scrollIndicator.style.width = `${scrollPercentage}%`;
}

window.addEventListener('scroll', updateScrollIndicator);

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelectorAll('.text span').forEach((span) => {
    span.addEventListener('mouseenter', () => {
        span.style.backgroundColor = randomColor();
        span.style.transform = 'scale(1.1)';
    });

    span.addEventListener('mouseleave', () => {
        span.style.backgroundColor = 'white';
        span.style.transform = 'scale(1)';
    });
});
