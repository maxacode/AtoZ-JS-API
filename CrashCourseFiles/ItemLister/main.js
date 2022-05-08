// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');
// console.log("hello!");

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById('item').value;

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);
// }

// // Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }





//my name diff color. 
var myname = document.getElementById('my-name');
myname.style.color = 'blue';
myname.style.fontWeight = 'bold';
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var textBox = document.getElementById('item');
var itemsDeleted = document.getElementById('itemsDeleted');
var searchBox = document.getElementById('filter');
var allItems = document.getElementsByClassName('list-group-item');

// filter key down event. 
searchBox.addEventListener('input', filter);

// when submit is pressed
form.addEventListener('submit', addItem);

// if del button is clicked
itemList.addEventListener('click', delItem);


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

function addItem (e) {
    e.preventDefault();
    var itemToAdd = textBox.value;
    console.log(itemToAdd);

    //creating new item with li
    var newLi = document.createElement('li');
    newLi.className = 'list-group-item';
    //adding text node. 
    newLi.innerText = itemToAdd;
    //newLi.appendChild(document.createTextNode(itemToAdd));
    var delButton = document.createElement('button');

    //Adding del button element to new item.
    delButton.className = 'btn btn-danger btn-sm float-right delete';
    delButton.innerText = "X"
    newLi.appendChild(delButton);

    //adding new Li to Ul list
    itemList.appendChild(newLi);
}


// if del button is clicked
 
function delItem(e) {
    if(e.target.classList.contains('delete')){
        //if(confirm('Are you sure you want to delete')){
        var li = e.target.parentElement;
        li.style.textDecoration = 'line-through';
        itemList.removeChild(li);
        //ading to Delted Items list. with Line Through. 
        itemsDeleted.appendChild(li);
        
        li.remove;
        //}
    }
}
 