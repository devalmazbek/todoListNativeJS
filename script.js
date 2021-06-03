const allList  = document.querySelector('ol');
function mainTodo() {
    const addToDo = document.querySelector('#add');
    addToDo.addEventListener('click', addList);
    const saveItem = document.querySelector('#save');
    saveItem.addEventListener('click', saveList);
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', clearLocalStorage)
}

const showError = () => {
    const todoText = document.querySelector('#todoInput');
    todoText.value = 'please enter something in the field';
};


const clearTodoText = () => {
   document.querySelector('#todoInput').value = ' ';
};


const saveList = () => {
    let todoList = allList.innerHTML;
    localStorage.setItem('todo', todoList);
};

function removeItem (e) {
    this.parentElement.remove();
}

const clearLocalStorage = () => {
    localStorage.clear();
    location.reload();  
}

allList.innerHTML = localStorage.getItem('todo');

const addList = (event) => {
    const todoText = document.querySelector('#todoInput').value;
    
    const list = document.createElement('li');
    const remove = document.createElement('span');
    remove.innerHTML = '&#x2716';
    remove.style.cssText = `margin-left: 15px; cursor: pointer; color`;
    list.textContent = todoText;

    if(todoText.trim() == '' || todoText.trim() == false) {
        return showError();
    }

    else {
        clearTodoText();
        list.append(remove);
        allList.append(list);
    }
    const removeList = document.querySelectorAll('.todo-list > ol > li > span');
    for (let prop of removeList) {
      prop.addEventListener('click', removeItem);
    }
};


window.addEventListener('DOMContentLoaded', mainTodo);
