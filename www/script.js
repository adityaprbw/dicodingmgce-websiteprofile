const header = document.querySelector('header');
header.addEventListener('mouseenter', () => {
    header.style.backgroundColor = '#005689';
});

header.addEventListener('mouseleave', () => {
    header.style.backgroundColor = '#0077b5';
});

const footer = document.querySelector('footer');
footer.addEventListener('mouseenter', () => {
    footer.style.backgroundColor = '#0077b5';
});

footer.addEventListener('mouseleave', () => {
    footer.style.backgroundColor = '#005689';
});
