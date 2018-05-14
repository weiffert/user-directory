const initialText = "Current Directory";
const header = document.querySelector('h1');
const input = document.querySelector('input');
const button = document.querySelector('button');
const contents = document.querySelector('ul');
let directory = ['Home', []];
let pwd = [0];
button.addEventListener('click', validateInput);

function validateInput() {
    if (input.value.length > 0) {
        input.classList.remove("invalid");
        let model = findCurrentFolderContents();
        model.push(input.value);
        model.push([header.textContent, ['..']]);

        makeFolder(input.value);
        input.value = "";
    } else {
        input.classList.add("invalid");
    }
}

function updateDirectory(event) {
    header.textContent = event.target.textContent;
    let model = findCurrentFolderContents();
    let index = model.findIndex(element => element === event.target.textContent);
    if(model[index + 1][0] === '..')
        pwd.pop();
    else {
        contents.classList.add('back');
        pwd.push(index);
    }

    contents.innerHTML = "";

    model = findCurrentFolderContents();
    for(let i = 0; i < model.length; i += 2) {
        makeFolder(model[i]);
    }
    model = findCurrentFolder();
    if(model[0] === directory[0] && header.textContent === initialText)
        contents.classList.remove('back');
}

function findCurrentFolderContents() {
    let model = directory;
    for(let i = 0; i < pwd.length; i++) {
        model = model[pwd[i] + 1];
    }
    return model;
}

function findCurrentFolder() {
    let model = directory;
    for(let i = 0; i < pwd.length - 1; i++) {
        model = model[pwd[i] + 1];
    }
    return model;
}

function makeFolder(name) {
    const newFolder = document.createElement('li');
    newFolder.addEventListener('click', updateDirectory);
    newFolder.textContent = name;
    contents.appendChild(newFolder);
}