var textfield;
var output;
var submit;

function setup() {
    noCanvas();
    textfield = select('#inputID');
    output = select('#outputID');
    submit = select('#submitID');
    submit.mousePressed(newText);
}


function newText() {
    var s = textfield.value();
    //createP(s.length); // length of it. 

    // loop through all to find 'a'
    // for (let i = 0; i < s.length; i++) {
    //     let indexOfA = s.indexOf('a', i);
    //     if (indexOfA !== -1) {
    //         createP("A at index: " + indexOfA + "<br>")             
    //     }  
    // }

    //Splitting practice
    var words = split(s, " ");
    for (var i = 0; i < words.length; i++) {
        createP(words[i]);
    }

    //sorting words.
    words = words.sort();
    s = join(words, " ");
    createP(s);

}