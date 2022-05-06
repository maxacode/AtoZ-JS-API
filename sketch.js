var inputTextField;
var output;
var submitButton;

function setup() {
    // put setup code here
    noCanvas();
    console.log("Test"); // logging to console
    //inputTextField = createInput(); // take input inot var input
    //let inputTextField = document.createElement('textarea');

    inputTextField = select('#textarea')

    //inputTextField.changed(newText); // if input var changed send it to function
    inputTextField.input(newTyping); // every singe input will be sent to NewTyping Function. 

    output = select('#output'); // the HTML file element. 
    outputUpper = select('#outputUpper'); //Output in upper:
    characterCount = select('#characterCount') //How many characters in box
    submitButton = select("#submitButton"); //taking html button and assigning it to submitButton variable
    submitButton.mousePressed(newText); //sending value when mouse pressed to NewText Function


}

function newText() {

    // console.log(inputTextField.value()); //Put the entereved value on the console
    createP(inputTextField.value()) // createP is the Paragraph tag of the var
}

function newTyping() {
    //createP(inputTextField.value()) // createP is the Paragraph tag of the var
    let result = inputTextField.value().toUpperCase(); // changing value to upper case.
    //Howto get index of variable and if statments. 
    // Index: https://www.w3schools.com/jsref/jsref_charat.asp

    //if "A" is entered then it will say "A in console" if CAT then in console cat. 
    if (result.charAt(result.length - 1) == "A") {
        console.log(`ITS A!! ${result}`);
    } else if (result.includes("CAT")) {
        console.log(`CAT in ${result}`);
    }

    output.html(inputTextField.value()); // adding every key presses to the output id in html file. 
    outputUpper.html(result); // same as aboce jsut to upper
    characterCount.html(result.length); //Displaying character count in HTML


}