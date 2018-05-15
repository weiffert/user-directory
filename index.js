const form = document.querySelector('form#userForm');
const handleSubmit = function(event) {
    event.preventDefault();
    const heading = document.querySelector('h1');
    heading.textContent = event.target.userName.value;
}

form.addEventListener('submit', handleSubmit);