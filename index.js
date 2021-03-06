const userList = [];

const renderColor = function (color) {
    const box = document.createElement('div');
    box.style.width = '2rem';
    box.style.height = '1rem';
    box.style.background = color;
    box.style.display = 'inline-block';
    return box;
}

const renderProfile = function (data) {
    const box = document.createElement('div');
    box.classList.add('profile');
    box.style.backgroundImage = `url(${data})`;
    return box;
}

const renderListItem = function (label, value) {
    const item = document.createElement('li');
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');

    dt.textContent = label.length > 0 ? `${label}: ` : '';
    try {
        dd.appendChild(value);
    } catch (error) {
        dd.textContent += value;
    }
    item.appendChild(dt);
    item.appendChild(dd);
    return item;
}

const renderList = function (data) {
    const list = document.createElement('dl');
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
    userList.push(user);

    const users = document.querySelector('#users');
    users.appendChild(renderList(user));

    form.reset();
    form.userName.focus();
}

const appendList = function (userList) {
    const users = document.querySelector('#users');
    userList.forEach(function (user) {
        users.appendChild(renderList(user));
    });
}

const removeAllChildren = function (parent) {
    while (parent.children.length > 0) {
        parent.removeChild(parent.children[0]);
    }
}

const handleFilter = function (event) {
    event.preventDefault();
    const form = event.target;
    const value = form.filter.value;
    const users = document.querySelector('div#users');

    removeAllChildren(users);
    users.appendChild(form);

    appendList(
        userList.filter(function (user) {
            return user['Name'].toUpperCase().indexOf(value.toUpperCase()) >= 0;
        }));
}

const handleResetFilter = function (event) {
    event.preventDefault();
    const form = event.target;

    const users = document.querySelector('div#users');
    removeAllChildren(users);
    users.appendChild(form);

    appendList(userList);
}

const userForm = document.querySelector('form#userForm');
const filterForm = document.querySelector('form#filterForm');

userForm.addEventListener('submit', handleSubmit);
filterForm.addEventListener('submit', handleFilter);
filterForm.addEventListener('reset', handleResetFilter);
