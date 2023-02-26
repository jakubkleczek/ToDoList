'use strict';

const input = document.getElementById('input');
const toDoList = [];
const ul = document.getElementById('list');
const addButton = document.getElementById('addbtn');

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
            <button id="editbtn">edit</button>
            <button onclick="removeItem()" id="rmbtn">remove</button>
        </div>
        `
        ul.appendChild(li);
    }
}

// removeItem function 
function removeItem() {
    const li = document.createElement('li');
    delete ul.li;

    // indexOf
    // splice 


    displayToDoList();
}

// editItem function 
function editItem() {
    // eventListener

}


// array


// pierwszy jezyk programowania FORTRAN 54' - John Backus działania matematyczne
