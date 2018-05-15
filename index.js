const form = document.querySelector('form#userForm');

const handleSubmit = function (event) {
    event.preventDefault();
    const form = event.target;
    const users = document.querySelector('#users');
    const userName = form.userName.value;
    const age = form.age.value;
    const color = form.favoriteColor.value;

    const p = document.createElement('p');
    const box = document.createElement('div');
    box.style.height='20px';
    box.style.width='20px';
    box.style.background=color;
    box.style.display='inline-block';

    p.textContent = `${userName}, ${age}`;
    p.appendChild(box);
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