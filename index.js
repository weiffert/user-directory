const button = document.querySelector('button');
button.addEventListener('click', changeText);

function changeText() {
    const header = document.querySelectorAll('h1');
    const text = document.querySelector('input');
    header[1].textContent = text.value.length > 0 ? text.value : "Where's the text's";
}