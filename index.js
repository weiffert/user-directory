const form = document.querySelector('form#userForm');
const handleSubmit = function(event) {
    const heading = document.querySelector('h1');
    heading.textContent = document.querySelector('input').value;
    event.preventDefault();
}

form.addEventListener('submit', handleSubmit);