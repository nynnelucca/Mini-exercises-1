var font, grammar, lines, loatext;

var rita; 


function preload() {

  font = loadFont('data/Junction-regular.otf');
  loatext = loadStrings('data/LOA.txt'); //correction loadText, it is a standard to spell the second word with a capitalized beginning letter
}

function setup() {

  createCanvas(800, 500);
  textFont(font, 30);
  textAlign(CENTER);
  grammar = RiTa.untokenize(loatext); //is your misspelling on purpose, because there is a function called "loadText"?
  

  lines = ["languageness", "of", "academization"]; //is this an array...? 
}

function draw() {

  background(250);
  text(lines[0], width / 2, 175);
  text(lines[1], width / 2, 210);
  text(lines[2], width / 2, 245);

if (mouseClicked) {
  append(lines, " ")
  append(lines, " ")
  text(lines[3], width / 2, 280);
  text(lines[4], width / 2, 315);
    }
    
    //var pos = isNoun(technology); 
    //console.log(pos);
}

function mouseClicked() {

    
    rita = RiTa.tokenize(grammar); 
  for (var i = 0; i < lines.length; i++)
    lines[i] = rita[floor(random(rita.length))];
}
 

