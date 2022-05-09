


//add other units of measure 
// add ability to enter any number for any unit and all others convert. 
// All elemnts

const gramsOutput = document.getElementById('gramsOutput');
const kgOutput = document.getElementById('kgOutput');
const ozOutput = document.getElementById('ozOutput');
const allCards = document.querySelector('#output');

//all cards to hide them on load - first way is best - it doesnt show up on reload. second it flashes still. 
// document.getElementById('output').style.visibility = 'hidden';

// document.addEventListener('DOMContentLoaded', (e) => {
//     allCards.style.display = 'none';
// });


document.getElementById('lbsInput').addEventListener('input', (e) => {

    //show all elements
    //allCards.style.display = 'block';
    document.getElementById('output').style.visibility = 'visible';

    const lbsInput =e.target.value;

    //clear them of values. 
    // kgOutput.innerText = lbsInput/2.2; 
    // gramsOutput.innerText = '';
    // ozOutput.innerText = '';

    kgOutput.innerText = lbsInput/2.2; 
    gramsOutput.innerText = lbsInput*453.59237;
    ozOutput.innerText = lbsInput*16;

    //const lbsInput =e.target.value;
    //kgOutput.appendChild(document.createTextNode(lbsInput/2.2));
    // e.target.value.content = lbsInput;
    
});


// list event on key down 
// send to 3 differnt functions: Grams/Kilos/Oz
// inputText.addEventListener('keyup', updateOutput);



// //all Outputs
// function updateOutput() {
//     console.log(inputText.value());
// }
//Grams


// kilos


//Oz