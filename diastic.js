let srcText;
let words;

function diastic(seed, words) { 
    for (var i = 0; i < seed.length; i++) {
        var c = seed.charAt(i);

        for (var j = 0; j < words.length; j++) {
            if (words[j].charAt(i) == c) {
                createP(words[j]);
                break;
            }
        }
    }
}

function preload() {
    srcText = loadStrings('randomText.txt');

}

function setup() {
    noCanvas();
    srcText = join(srcText, ' ');
    words = splitTokens(srcText, ",!.?");

    let seed = select("#inputID");
    let submit = select("#submitID");
    submit.mousePressed(function() {
        var phrase = diastic(seed.value(), words);
    });
    
}

