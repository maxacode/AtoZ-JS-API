
console.log(document.all);

console.log(document.images);

console.log(document.forms[0]);


var headerTitle = document.getElementById('header-title');
//headerTitle.textContent = 'Hello World';
//headerTitle.innerText = "Goodbye World!"; // // payes attention to Style (Span)
headerTitle.innerHTML = "<h1>Privet</h1>";
headerTitle.style.color = 'red';
headerTitle.style.borderBottom = 'dashed 3px #000';


// get elemnts by class name. 
var items = document.getElementsByClassName('list-group-item');
// items[0].textContent = "hello 2"
// items[0].innerHTML = '<li class="list-group-item">Hello A<button class="btn btn-danger btn-sm float-right delete">X</button></li>'
// console.log(items[0])

for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'silver';
}


// Get elemnts by Tag name.  
// var li = document.getElementsByTagName('li');
// li[2].style.color = 'purple';
//for (var x = 0; x < li.length; x++) {
   // li[x].style.color = 'green';
//0}

var lilast = document.getElementsByTagName('li');
lilast[1].style.color = 'red';
var lilast2 = document.querySelector('.list-group-item:last-child');
lilast2.style.color = 'orange';
var odd = document.querySelectorAll('li:nth-child(odd)');
odd[1].style.color = 'blue';
var twoBlue = document.querySelector('.list-group-item:nth-child(3)');
twoBlue.style.color = 'gray';
var twoBlue = document.querySelector('.list-group-item:nth-child(1)');
twoBlue.style.color = 'blue';
twoBlue.innerHTML = '<li class="list-group-item">ASD 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li>';
// Query selector.  only used for one item. Grabs the first one. 
var header = document.querySelector('#main-header');
header.style.backgroundColor = 'yellow';

var input = document.getElementById('item');
input.value = 'Enter Here!';
input.addEventListener('click', (e) => {
    input.value = ''
    //input.style.backgroundColor = 'orange';
    input.style.border = '8px solid #ff0000';

});
input.addEventListener('mouseout', (e) => {
    if (input.value === '') {
        input.value = 'Enter Here!';
        input.style.border = '1px solid #ff0000';
    } else (console.log(input.value))
});



// btn.addEventListener('mouseover',  (e) => {
//     btn.style.backgroundColor = "yellow";
//     console.log("Mouse Over \n " + e);
//     console.log(e);

// });
 
var submit = document.querySelector('input[type="submit"]');
submit.value = "Lets Goo!";

// // Make X buttons Yellow when clicked first then Red when clicked second time then back to yellow. 
var buttons = document.getElementsByClassName('btn');
buttons.forEach(function (button, index) {
    button.addEventListener('click', (e) => {
        if (button.style.backgroundColor === "yellow") {
            button.style.backgroundColor = "red";

        } else { button.style.backgroundColor = "yellow"; }
        // setTimeout will runn button.style.xxx after 10000 milliseconds or 10 seconds. Kinda like Sleep. 
        //Set a different function or set it inside
        setTimeout(() => { buttonPink(button) }, 10000);
        setTimeout(() => { button.style.backgroundColor = "pink"; }, 10000);
    });
})

function buttonPink(button) {
    button.style.backgroundColor = "pink";
}


// for (var x = 1; x < button1.length; x++) {
//     button1[x].addEventListener('click', (e) => {
//         if (button1[x].style.backgroundColor === "yellow") {
//             button1[x].style.backgroundColor = "red";

//         } else { button1[x].style.backgroundColor = "yellow"; }
//     });
// };