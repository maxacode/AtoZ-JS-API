

//changing header color
let headerColor0 = document.getElementsByTagName('header');
headerColor0[0].style.backgroundColor = 'blue';
//console.log(headerColor0[0].style.backgroundColor);
//changing the h1 title color background
let headerColor = document.getElementById('title123');
headerColor.style.backgroundColor = 'red';
headerColor.style.color = 'white';
//console.log(headerColor.style.backgroundColor);


//createElement

//create a div 
var newDiv = document.createElement('li');
//adding a class, Id and Title. 
newDiv.className = 'items';
//newDiv.id = 'helloID';
//newDiv.setAttribute('id', 'hellow2');
//newDiv.setAttribute('title', 'hellow Div');

// creating a text node to this var
var newDivText = document.createTextNode("Mouse Location on Trackpad: ");
// attaching textNode to div var. 
newDiv.appendChild(newDivText);

//Selecting the container class in HTML
var items = document.querySelector('.items');
console.log(items);
// getting the H1 header element
var firstItem = document.querySelector('li');
//console.log(firstItem);

// inserting before the h1 header element
items.insertBefore(newDiv, firstItem);
newDiv.style.fontWeight = 'bold';

//console.log(newDiv);

// new button at the botton of the list
var newButton = document.createElement('button');
newButton.setAttribute('class', 'btn btn-dark btn-block');
newButton.setAttribute('id', 'button');
var newButtonText = document.createTextNode("Click!");
newButton.appendChild(newButtonText);

items.insertBefore(newButton, firstItem[0]);

// newButton.addEventListener('click', function(){
//     console.log("Clicked button");
// });

newButton.addEventListener('click', buttonClick);

function buttonClick(event) {
    console.log("ButtonCLicked!");
    document.querySelector('.container').style.backgroundColor = 'red';
    // Event is the paramater of the elemnt. 
    console.log(event);
}

//console.log(newButton);
// adding events listenings. 

//creating a box 
var x = 0
var boxElement = document.createElement('div');
boxElement.setAttribute('id', 'boxID');
boxElement.setAttribute('style', 'width: 435px; height:200px; background: #bd5aca;');

items.insertBefore(boxElement, items[0]);

boxElement.addEventListener('mousemove', runEvent);
//boxElement.addEventListener('mousemove', runEventOut);
// mouseOver/out for inside elemnts - Enter/leave for outside elemnt. 
function runEvent(event) {
    //console.log(event.type, event.clientX, event.clientY);
   //console.log(x);
    x++
    newDiv.innerHTML = 'X: ' + x + '<h3> Mouse X: ' + event.offsetX+ '</h3><h3> Mouse Y: ' + event.offsetY+ '</h3>';
    boxElement.style.backgroundColor = "rgb("+event.offsetX+","+event.offsetY+","+x/10+")";
}

function runEventOut(event) {
    console.log(event.type, event.clientX, event.clientY)
}

// Select drop down element. 
var dropDown = document.querySelector("select");
console.log(dropDown[1]);
dropDown.style.fontSize = "20px";
dropDown.style.fontWeight = "bold";


dropDown.addEventListener("change", runEvent);

function runEvent(event) { 
    console.log('Event Type: ' + event.type);
}