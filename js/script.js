
var input = document.querySelector('input');
var btn = document.querySelector('button');
var localData = localStorage.getItem('localItem');
var localItems = JSON.parse(localData);
var taskList;

btn.onclick =()=> {
    if (localItems === null) {
        taskList = [];
    } else {
        taskList = localItems;
    }
    taskList.push(input.value);
    input.value = "";
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showList();
}

var showList =()=> {
    let outPut = "";
    let allList = document.querySelector('.todo-list');
    if (localItems === null) {
        taskList = [];
    } else {
        taskList = localItems;
    }
    taskList.forEach((fd)=>{
        outPut += `<li class="list">${fd}</li><button class="deleteBtn"><i class="fa-sharp fa-solid fa-trash"></i></button>`
    })
    allList.innerHTML = outPut;
    
}
showList();





/* addBtn.onclick =()=> {
    if (input.value.length === 0) {
        alert('Please write something');
    } else {
    const li = document.createElement('li');
    const button = document.createElement('button');
    li.innerHTML = input.value;
    input.value = '';
    todoList.appendChild(li);
    todoList.appendChild(button);
    button.innerHTML = '<i class="fa-solid fa-trash"></i>';
    button.classList.add('delete_btn');
    button.onclick = ()=> {
        li.remove();
        button.remove();
    }
}
} */


/* 
const input = document.querySelector('input');
const todoList = document.querySelector('.todo-list');
const addBtn = document.querySelector('button'); */