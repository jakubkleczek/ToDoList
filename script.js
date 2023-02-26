'use strict';

const input = document.getElementById('input');
const toDoList = [];
const ul = document.getElementById('list');
const addButton = document.getElementById('addbtn');
const editInput = document.getElementById('')

// addButton.disabled = true;


function addItem() {
    if (input.value==='') {
        return
    } else {
        // addButton.disabled = false;
    }
    
    toDoList.push(input.value);
    document.getElementById('input').value='';
    displayToDoList();
}

function displayToDoList() {
    ul.innerHTML = "";
    for(let i=0; i<toDoList.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" id="checkbox">
        <span id="todoitem">${toDoList[i]}</span>
        <div id="btns">
            <button onclick="editItem(${i})" id="editbtn">edit</button>
            <button onclick="removeItem(${i})" id="rmbtn">remove</button>
        </div>
        `
        ul.appendChild(li);
    }
}

// removeItem function 
function removeItem(key) {
    toDoList.splice(key, 1);
    displayToDoList();
}

// editItem function 
function editItem(key) {
    


    // eventListener

}

// array


// pierwszy jezyk programowania FORTRAN 54' - John Backus - działania matematyczne
