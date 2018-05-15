const form = document.querySelector('form#userForm');

const handleSubmit = function (event) {
    event.preventDefault();
    const form = event.target;
    const users = document.querySelector('#users');
    const userName = form.userName.value;
    const age = form.age.value;
    const color = form.favoriteColor.value;
    
    const list = document.createElement('ul');
    
    const nameItem = document.createElement('li');
    nameItem.textContent = `Name: ${userName}`;
    list.appendChild(nameItem);
    const ageItem = document.createElement('li');
    ageItem.textContent = `Age: ${age}`;
    list.appendChild(ageItem);
    const colorItem = document.createElement('li');
    colorItem.textContent = `Favorite Color: `;
    list.appendChild(colorItem);

    const box = document.createElement('div');
    box.style.height='10px';
    box.style.width='40px';
    box.style.background=color;
    box.style.display='inline-block';

    colorItem.appendChild(box);
   
    users.appendChild(list);

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