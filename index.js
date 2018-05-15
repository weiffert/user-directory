const form = document.querySelector('form#userForm');

const handleSubmit = function(event) {
    event.preventDefault();
    const users = document.querySelector('#users');
    users.textContent = `${users.textContent} ${event.target.userName.value}`;
    event.target.userName.value = '';
}

form.addEventListener('submit', handleSubmit);