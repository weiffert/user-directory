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

const renderList = function(form) {
    const users = document.querySelector('#users');
    const userName = form.userName.value;
    const age = form.age.value;
    const color = form.favoriteColor.value;
    
    const list = document.createElement('ul');
    list.appendChild(renderListItem(`Name: ${userName}`));
    list.appendChild(renderListItem(`Age: ${age}`));
    list.appendChild(renderListItem(`Favorite Color: `, color));
    list.style.border = `.25rem solid ${color}`;

    users.appendChild(list);
    
}

const handleSubmit = function (event) {
    event.preventDefault();
    const form = event.target;
    renderList(form);
    form.reset();
    form.userName.focus();
}

form.addEventListener('submit', handleSubmit);