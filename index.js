const form = document.querySelector('form#userForm');

const handleSubmit = function(event) {
    const form = event.target;
    event.preventDefault();
    const users = document.querySelector('#users');
    users.innerHTML += `<p>
        ${form.userName.value}, ${form.age.value}
        <\p>`;
    form.reset();
    form.userName.focus();
}

form.addEventListener('submit', handleSubmit);