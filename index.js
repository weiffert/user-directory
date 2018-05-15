const form = document.querySelector('form#userForm');

const handleSubmit = function(event) {
    const form = event.target;
    event.preventDefault();
    const users = document.querySelector('#users');
    const userName = form.userName.value;
    const age = form.age.value;
    users.innerHTML += `<p>${userName}, ${age}<\p>`;
    form.reset();
    form.userName.focus();
}

form.addEventListener('submit', handleSubmit);