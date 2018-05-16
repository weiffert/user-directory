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

const renderList = function(data) {
    const list = document.createElement('ul');
    list.style.border = `.25rem solid ${data['Favorite Color'].style.background}`;
    
    const keys = Object.keys(data);
    keys.forEach(key => {
        list.appendChild(renderListItem(
            key === keys[0] ? '' : key, 
            data[key]
        ));
    });
    return list;
}

const handleSubmit = function (event) {
    event.preventDefault();
    const form = event.target;

    const user = {
        'Profile': renderProfile(form.profile.value),
        'Name': form.userName.value,
        'Age': form.age.value,
        'Favorite Color': renderColor(form.favoriteColor.value),
    }

    const users = document.querySelector('#users');
    users.appendChild(renderList(user));

    form.reset();
    form.userName.focus();
}

form.addEventListener('submit', handleSubmit);