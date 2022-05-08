// let srcText;
// let words;

// function diastic(seed, words) { 
//     for (var i = 0; i < seed.length; i++) {
//         var c = seed.charAt(i);

//         for (var j = 0; j < words.length; j++) {
//             if (words[j].charAt(i) == c) {
//                 createP(words[j]);
//                 break;
//             }
//         }
//     }
// }

// function preload() {
//     srcText = loadStrings('randomText.txt');

// }

// function setup() {
//     noCanvas();
//     srcText = join(srcText, ' ');
//     words = splitTokens(srcText, ",!.?");

//     const seed = select("#inputID"); //seed.value()
//     const seed2 = document.getElementById('inputID'); //seed.value and no # in string where ID is
//     const seed3 = document.querySelector('#inputID'); //seed.value and yes # where ID is string.
//     let submit = select("#submitID");
//     submit.mousePressed(function() {
//         var phrase = diastic(seed3.value(), words);
//     });
//     console.log("Seed: "+ seed.value() +  "\nSeed2: " + seed2.value + " \nSeed3: " + seed3.value);
//     //document.write(seed.value()); // // Write in teh HTML outputfile
// }
// let ul0 = document.getElementsByClassName('item');
// console.log(ul0.item);

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

//console.log(document.querySelectorAll('.item'));
// let items = document.getElementsByClassName('.item');
// items.forEach((item) => console.log(item));

console.log("TEST!!");
const items = document.getElementsByClassName('item');
console.log(items);
items.forEach((item) => console.log(item.innerHTML = (item.innerHTML + " 122"))); 


const ul = document.querySelector('.items');
//ul.remove();d
ul.firstElementChild.textContent = 'Hello Kelsey!';
ul.children[1].innerText = "Hello Maks";
ul.lastElementChild.innerHTML = '<h1>Hello Ezra</h>';

const inputText = document.querySelector('.inputID2');
console.log(inputText.value);

const btn = document.querySelector('.btn'); 
 
btn.style.height = '100px';
btn.style.width = '100px';
btn.style.color = 'red';
btn.style.textAlign = 'left';
// add event listeners here or in the HTML like for btn2 
//Events listner for mouseover then (e) => gives a direct command or after event ex: click, a funciton name as second itmes
btn.addEventListener('mouseover',  (e) => {
    btn.style.backgroundColor = "yellow";
    console.log("Mouse Over \n " + e);
    console.log(e);

});
btn.addEventListener('mouseout', (e) => {
     btn.style.backgroundColor = "pink";
     e.preventDefault();
     console.log("Mouse Out");
});

btn.addEventListener('click', onClick);
function onClick() {
    console.log("Submit Button Clicked.");
    console.log(`Value in input box: ${inputText.value}`);

}

const btn2 = document.getElementById('myButton');
btn2.style.height = '100px';
btn2.style.width = '100px';
btn2.style.textAlign = 'center';
btn2.style.textOrientation = 'default';
// sample: object.style.font = "font-style font-variant font-weight font-size/line-height|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit;"
btn2.style.font = "italic small-caps bold 30px arial,serif";
// // or cna be done indivually instead of all in one "style.font"
// btn2.style.fontStyle = 'oblique';
// btn2.style.fontWeight = 'bold';
// btn2.style.fontSize = '15px';
btn2.style.lineHeight = .75;

console.log(btn2);
function mouseOver() {
    btn2.style.background="violet";
};
function mouseOut() {
    btn2.style.background="red";
};

// const ul1 = document.querySelector('.item');

// ul1.firstElementChild.textContent = 'JS Item 1';
// ul1.children[1].innerText = 'JS Item 2';

// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// console.log(document.querySelectorAll('.item'));
