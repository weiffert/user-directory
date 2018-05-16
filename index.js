const form = document.querySelector('form#userForm');

const renderColor = function(color) {
    const box = document.createElement('div');
    box.style.width = '2rem';
    box.style.height = '1rem';
    box.style.background = color;
    box.style.display ='inline-block';
    return box;
}

const renderProfile = function(data) {
    const box = document.createElement('div');
    box.classList.add('profile');
    box.style.backgroundImage = `url(${data})`;
    return box;
}

const renderListItem = function(label, value) {
    const item = document.createElement('li');
    item.textContent = label.length > 0 ? `${label}: ` : '';
    try {
        item.appendChild(value);
    } catch(error) {
        item.textContent += value;
    }
    return item;
}

const renderList = function(form) {
    const users = document.querySelector('#users');
    const user = {
        profile: renderProfile(form.profile.value),
        name: form.userName.value,
        age: form.age.value,
        color: renderColor(form.favoriteColor.value),
    }
    
    const list = document.createElement('ul');
    list.style.border = `.25rem solid ${form.favoriteColor.value}`;
    
    Object.keys(user).map(key => {
        list.appendChild(renderListItem(
            key === 'profile' ? '' : key, 
            user[key]
        ));
    });

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