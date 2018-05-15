const form = document.querySelector('form#userForm');

const handleSubmit = function(event) {

    event.preventDefault();
    const users = document.querySelector('#users');
    users.innerHTML += `<p>
        ${event.target.userName.value}, ${event.target.age.value}
        <\p>`;
    form.reset();
}

form.addEventListener('submit', handleSubmit);