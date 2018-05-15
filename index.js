const form = document.querySelector('form#userForm');

const renderColor = function(color) {
    const box = document.createElement('div');
    box.style.width = '2rem';
    box.style.height = '1rem';
    box.style.background = color;
    box.style.display ='inline-block';
    return box;
}

const renderListItem = function(content, color) {
    const item = document.createElement('li');
    item.textContent = content;
    if(color){
        item.appendChild(renderColor(color));
    }
    return item;
}

const handleSubmit = function (event) {
    event.preventDefault();
    const form = event.target;
    const users = document.querySelector('#users');
    const userName = form.userName.value;
    const age = form.age.value;
    const color = form.favoriteColor.value;
    
    const list = document.createElement('ul');
    
    list.appendChild(renderListItem(`Name: ${userName}`));
    list.appendChild(renderListItem(`Age: ${age}`));
    list.appendChild(renderListItem(`Favorite Color: `, color));
   
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