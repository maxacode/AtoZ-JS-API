
// drag and drop file

function setup() {
    var canvasVAR = createCanvas(300,300);
    background(0);
    canvasVAR.drop(handleDrop);

    dropzoneVAR = select('#dropzoneID');
    dropzoneVAR.dragOver(highlight); //when somehting dragged over zone
    dropzoneVAR.dragLeave(unhighlight); //when removed from drop zone
    dropzoneVAR.drop(handleDrop, unhighlight); //take file when droped to unhighlight and handle it. 
}

function highlight() {
    dropzoneVAR.style('background-color','#ccc');
}

function unhighlight() {
    dropzoneVAR.style('background-color','#fff');
}

function handleDrop(file) {
    createP("Name: " + file.name + " | type: " + file.type + " | size: " + file.size);
    var img = createImg(file.data);
    //img.size(200,200);
    img.hide();
    image(img, 0, 0, 300, 300);
}
