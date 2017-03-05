//variable for meteorer


var meteor = {
    x: 300,
    y: 0,
    metSize: 20
 
};
 
var meteor2 = {
    x: 0,
    y: 300,
    metSize1: 20
};
 
// boolean variable der bruges til at aktiverer meteor1 langs x-akse
 
var meteorloop = false;

var start = false; 
 
// variable for startpunkt for bolde når de har nået bunden/siden  
var lokation1 = 0;
var lokation2 = 1300;
 
var lokation3 = 0;
var lokation4 = 950;

 
 var song; 
function preload(){
song = loadSound('assets/metropolis.mp3');
}
 
 
function setup() {
  createCanvas (1300, 950);
    confirm ("Press once to initiate the loop!"); 
    song.play(); 
    song.setVolume(1.0);
    song.loop(240, 1);
    
}
   
function draw() {
 
   
background(200);
    // portaler
    fill (0);
    strokeWeight(5);
    stroke(0, 120, 255);
    ellipse(width/2, 5, width, 20);
    noStroke();
   
    fill(0);
    strokeWeight(5);
    stroke(253, 102, 0);
    ellipse (5, height/2, 20, height);
    noStroke();
   
    fill (0);
    strokeWeight(5);
    stroke(0, 120, 255);
    ellipse(width/2, height-5, width, 20);
    noStroke();
   
    fill(0);
    strokeWeight(5);
    stroke(253, 102, 0);
    ellipse(width-5, height/2, 20, height);
    noStroke();
   
    //sort cirkel
    fill(0);
    rectMode(CENTER);
    rect(width/2, height/2, 200, 200);
   
     gitter(130);
   
 
    //meteor langs y-akse
    if (meteorloop == false && start == true) {
    strokeWeight(1);
    stroke(0);
    fill(255);
   
   
    ellipse(meteor.x, meteor.y, meteor.metSize, meteor.metSize);
 
       
    meteor.y = meteor.y+8;
   
    // den flicker lidt frem og tilbage på x-aksen
   
  meteor.x = meteor.x + random(-3, 3);
       
    // her stopper meteor2    
    meteor2.x = meteor2.x;
   
    // når meteor1 når bunden starter den forfra igen på random position i toppen  
    }
if (meteor.y > height) {
    meteor.y = 0;
    meteor.x = random(lokation1, lokation2);
   
  }
   
    // hvis meteor rammer indenfor koordinater, så sættes boolean variable til true = det betyder så at meteor2 igangsættes
    if (meteor.x > 550 && meteor.x < 750 && meteor.y > 375 && meteor.y <575) {
        meteorloop = true;
        meteor.y = 0;
        meteor.x = random(lokation1, lokation2);
    }
   
    if (meteorloop) {
   
    // meteor1 langs x-akse
    strokeWeight(1);
    stroke(0);
    fill(255);
    ellipse(meteor2.x, meteor2.y, meteor2.metSize1, meteor2.metSize1);
 
    meteor2.x = meteor2.x+8;
       
   
    // den flicker lidt frem og tilbage på y-aksen
  meteor2.y = meteor2.y + random(-3, 3);
   
    // her stoppes meteor
     
        meteor.y = meteor.y;
    }  
    // meteor2 langs x-aksen spawner random steder på y-aksen
    if (meteor2.x > width) {
    meteor2.x = 0;
    meteor2.y = random(lokation3, lokation4);
   
    }
    if (meteor2.x > 550 && meteor2.x < 750 && meteor2.y > 375 && meteor2.y <575) {
        meteorloop = false;
        meteor2.x = 0;
        meteor2.y = random(lokation3, lokation4);
    }
   
}

// bolde sendes afsted med museklik

function mousePressed() {
    start = true; 
    
    if (start == true && meteorloop == false){
        meteor.x = 0; 
        meteor.y = random (lokation1, lokation2); 
    }
    
    if (start == true && meteorloop == true) {
        meteor2.x = 0; 
        meteor2.y = random(lokation3, lokation4); 
    }
}
   
// gitter grid
 
function gitter(distance) {
        for (var i = 0; i<width; i+=distance) {
            strokeWeight(1);
            stroke(0);  
            line(i, 0, i, 950);
        }
        for (var i=0; i<height; i+=distance) {
            strokeWeight(1);
            stroke(0);
            line(0, i, 1300, i);
        }
       
}
         
   