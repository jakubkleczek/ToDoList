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
        <button id="editbtn">edit</button>
        <button id="rmbtn">remove</button>
        `
        ul.appendChild(li);
    }
}

// this.displayToDoList();




// removeItem function 
function removeItem() {
    // indexOf
    // splice 



    displayToDoList();
}

// edit function 
function editItem() {
    // eventListener

}


// array

// const array = [1, 2, 3, 4, 5];

//             const string = JSON.stringify(array, null, 4);

//             document.querySelector(".output").innerHTML = string;

// pierwszy jezyk programowania