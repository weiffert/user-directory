const button = document.querySelector('button');
button.addEventListener('click', changeText);

function changeText() {
    const header = document.querySelectorAll('h1');
    header[1].textContent = 'Why\'d you push that button?';
}