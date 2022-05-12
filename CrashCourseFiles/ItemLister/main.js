
/* TODO:
1. add support for Hover over X/Undo and show tooltip of what it does

2. Add another X in deleted for permanent removal. 

3. Add alert Dialog like in Book Tracker. 

4. Validate that Input is not empty. 

5. CTRL  + F doesnt bring up a browser dialog but the one built into the app.

*/

//my name diff color. 
var myname = document.getElementById('my-name');
myname.style.color = 'pink';
myname.style.fontWeight = 'bold';
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var textBox = document.getElementById('textBox');
var itemsDeleted = document.getElementById('itemsDeleted');
var searchBox = document.getElementById('filter');
var allItems = document.getElementsByClassName('list-group-item');




textBox.addEventListener('click', (e) => {
    if(textBox.value == 'Enter Here') {
        textBox.value = "";
    }
});
textBox.addEventListener('mouseout', () => { 
    if (textBox.value == "") {
        textBox.value = "Enter Here";
}
});
// filter key down event. 
searchBox.addEventListener('input', filter);

// when submit is pressed
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemToAdd = textBox.value;
    //console.log(itemToAdd);
    UI.addItemToUI(itemToAdd);
    Storage.addItemToStorage(itemToAdd);


});




function filter() {
    userInput = searchBox.value;
    //console.log(allItems.length); 
    for (x = 0; x < allItems.length; x++) {
        if (allItems[x].innerText.toLowerCase().indexOf(userInput.toLowerCase()) == '-1') {
            //allItems[x].style.display = 'block'
            allItems[x].style.display = 'none';
        } else { 
            allItems[x].style.display = 'block';
        }
        
    }
}

class UI {
    static getToDo() {
        const toDo = Storage.getToDo();
        

        toDo.forEach((singleTodo) =>
            UI.addItemToUI(singleTodo));
    }

    static addItemToUI(singleTodo) {
            //creating new item with li
        var newLi = document.createElement('li');
        newLi.className = 'list-group-item';
        //adding text node. 
        newLi.innerText = singleTodo;
        //newLi.appendChild(document.createTextNode(itemToAdd));
        var delButton = document.createElement('button');

        //Adding del button element to new item.
        delButton.className = 'btn btn-danger btn-sm float-right delete';
        delButton.innerText = "X"
        newLi.appendChild(delButton);

        //adding new Li to Ul list
        itemList.appendChild(newLi);
        textBox.value = "";

    }
    static getToDoDeleted() {
        const toDoDeleted = Storage.getToDoDeleted();
        

        toDoDeleted.forEach((singleTodo) =>
            UI.addItemToUIDeleted(singleTodo));
    }
    
    static addItemToUIDeletedExisting(e) {
        var li = e.target.parentElement;
        console.log("LI" + e.target);
    
        // console.log('singleTodo:' + singleTodo+ " \n LI: " + li)

        itemList.removeChild(li);
        
        li.style.textDecoration = 'line-through';
        //console.log(e.target.className); 
        //changing to UNDO instead of delete and undo in button Text. 
        e.target.className = 'btn btn-danger btn-sm float-right undo';
        e.target.innerText = 'Undo';
        
    
        //ading to Delted Items on top of list. with Line Through. 
        itemsDeleted.insertBefore(li, itemsDeleted.firstChild);
        const singleTodo = e.target.parentElement.innerText.slice(0,-5)
        Storage.removeToDo(singleTodo);
        Storage.addItemToStorageDeleted(singleTodo);

        //UI.addItemToUIDeleted(singleTodo)
    }
    static addItemToUIDeleted(singleTodo) {
        //if(e.target.classList.contains('delete')){
        //if(confirm('Are you sure you want to delete')){
        var newLiForDeleted = document.createElement('li');
        newLiForDeleted.className = 'list-group-item';
        //adding text node. 
        newLiForDeleted.innerHTML = `${singleTodo} <button class= "btn btn-danger btn-sm float-right undo">Undo</button></li>`;
        newLiForDeleted.style.textDecoration = 'line-through';

        itemsDeleted.insertBefore(newLiForDeleted, itemsDeleted.firstChild);       

    }

}


//storage

class Storage {
    static getToDo() {
        let toDo;
        console.log("Storage.getToDo" + localStorage.getItem('todo'));
        if(localStorage.getItem('todo') === null) {
            toDo = [];
        } else {
            toDo = JSON.parse(localStorage.getItem('todo'));
        }
        return toDo;
    }

    static addItemToStorage(todoItem) {
        const toDo = Storage.getToDo();
        toDo.push(todoItem);
        localStorage.setItem('todo', JSON.stringify(toDo));

    }

    static removeToDo(todoItem) {
        const toDo = Storage.getToDo();
        console.log("Storage.removeToDo" + toDo + " - TodoItem Var -" + todoItem);
        toDo.forEach((indivual, index) => {
            console.log("Indivual: '" + indivual + "' - toDoItem: '" + todoItem + "'");
            if (indivual == todoItem) {
                console.log("Indivual: " + indivual + " - toDoItem: " + todoItem);
                toDo.splice(index, 1);

            }
        });
        localStorage.setItem('todo', JSON.stringify(toDo));
    }

    //dellete storage
    static getToDoDeleted() {
        let toDoDeleted;
        //console.log("Storage.getToDoDeleted" + localStorage.getItem('todo'));
        if(localStorage.getItem('todoDeleted') === null) {
            toDoDeleted = [];
        } else {
            toDoDeleted = JSON.parse(localStorage.getItem('todoDeleted'));
        }
        return toDoDeleted;
    }

    static addItemToStorageDeleted(todoItemDeleted) {
        const toDoDeleted = Storage.getToDoDeleted();
        toDoDeleted.push(todoItemDeleted);
        localStorage.setItem('todoDeleted', JSON.stringify(toDoDeleted));

    }

    static removeToDoDeleted(todoItemDeleted) {
        const toDoDeleted = Storage.getToDoDeleted();
        console.log("Storage.removeToDo" + toDoDeleted+ " - TodoItem Var -" + todoItemDeleted);
        toDoDeleted.forEach((indivual, index) => {
            console.log("Indivual: '" + indivual + "' - toDoItem: '" + todoItemDeleted + "'");
            if (indivual == todoItemDeleted) {
                console.log("Indivual: " + indivual + " - toDoItem: " + todoItemDeleted);
                toDoDeleted.splice(index, 1);

            }
        });
        localStorage.setItem('todoDeleted', JSON.stringify(toDoDeleted));
    }

    
}
function returnToDoFromDeleted(e) {
    if (e.target.classList.contains('undo')){
        const todoItem = e.target.parentElement.innerText.slice(0,-5);

        //console.log("todoItem: " + todoItem);
        Storage.addItemToStorage(todoItem);
        Storage.removeToDoDeleted(todoItem);
        var li = e.target.parentElement;
        li.style.textDecoration = 'none';
        //console.log(e.target.className);
        // chanign back to delete class and X letter in button 
        e.target.className = 'btn btn-danger btn-sm float-right delete';
        e.target.innerText = 'X';

        itemsDeleted.removeChild(li);
        itemList.appendChild(li);
        
    }
}


document.addEventListener('DOMContentLoaded', UI.getToDo);
document.addEventListener('DOMContentLoaded', UI.getToDoDeleted);

// if del button is clicked
itemList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
      

        UI.addItemToUIDeletedExisting(e)

    }

});

itemsDeleted.addEventListener('click', returnToDoFromDeleted);

