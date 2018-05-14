const button = document.querySelector('button');
button.addEventListener('click', changeText);

function changeText() {
    const header = document.querySelector('h1');
    header.textContent = 'Why\'d you push that button?';
}