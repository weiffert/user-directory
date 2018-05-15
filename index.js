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

    const colorBox = document.createElement('div');
    colorBox.style.width = '2rem';
    colorBox.style.height = '1rem';
    colorBox.style.background = color;
    colorBox.style.display ='inline-block';

    colorItem.appendChild(colorBox);
   
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