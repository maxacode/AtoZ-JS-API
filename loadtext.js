var txt

function loadFile () {
  //txt = loadStrings("randomText.txt") // load text from a file.
  loadStrings('randomText.txt', fileLoaded)
}

function fileLoaded (data) {
  createP(data)
}

function fileSelected (file) {
  console.log(file) // stats of file.
  createP(file.name + ' ' + file.size + ' ' + file.type); //stats of file as P
  //createP(file.data); // contents of file. 
  //Check if file is a Text file and if so print it out if it is not print error message. 
  if (file.type == "text") {
      createP(file.data); // contents of file
    } else {
        createP("Not a text file, please try again!")
    }
}
function setup () {
  noCanvas()
  //console.log(txt); //post of conole of text
  //createP(txt); //create paragraph with text
  // createP("______<br>----");
  // createP(join(txt, "<br/>"));
  createP('______<br>----')
  let button = select('#showTextButton') //map to button in html
  button.mousePressed(loadFile) // when button pressed start loadfile function.

  createFileInput(fileSelected) //to upload a file.
}
