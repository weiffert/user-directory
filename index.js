const form = document.querySelector('form#userForm');

const handleSubmit = function (event) {
    event.preventDefault();
    const form = event.target;
    const users = document.querySelector('#users');
    const userName = form.userName.value;
    const age = form.age.value;

    const p = document.createElement('p');
    p.textContent = `${userName}, ${age}`;
    users.appendChild(p);

    form.reset();
    form.userName.focus();
}

form.addEventListener('submit', handleSubmit);

/*
Why'd this add a second <p></p>?
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
*/