const input = document.getElementById('input');
const toDoList = [];
const ul = document.getElementById('list');


function addItem() {
    toDoList.push(input.value);
    console.log(toDoList);
    document.getElementById('input').value='';
    // wyczysicc input po dodaniu

    const li = document.createElement('li');
    li.input = input.value;
    ul.appendChild(li);
}


// removeItem function 

// edit function 

// array
