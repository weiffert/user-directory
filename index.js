const form = document.querySelector('form#userForm');

const handleSubmit = function(event) {
    event.preventDefault();
    const users = document.querySelector('#users');
    users.innerHTML += `<p>${event.target.userName.value}<\p>`;
    event.target.userName.value = '';
}

form.addEventListener('submit', handleSubmit);