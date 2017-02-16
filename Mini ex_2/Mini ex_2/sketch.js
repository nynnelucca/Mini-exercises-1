var song; 
var textSwitch = {    
x:650,
y:250, 
}
function preload(){
song = loadSound('assets/darude.mp3');  
}
function setup() {
 createCanvas(1600, 1000);
 song.play(); 
song.loop(); 
song.setVolume(0.0); 
}
function draw() {
//variabler
var rect0 = {
    x:random(0, 1600), 
    y:random(0, 1000),
    z1:random(10, 20),
    z2:random(10, 20),
    R:(120, 240),
    G:0,
    B:0,
}
     
var ellips0 = {
    x:random(0, 1600), 
    y:random(0, 1000),
    z1:random(10, 20),
    z2:random(10, 20),
    R:(120, 240),
    G:0, 
    B:0, 
}
    background(200);
    strokeWeight(2);
    fill(255);
    ellipse(500, 400, 100, 100);
    ellipse(650, 400, 100, 100);
    ellipse(800, 400, 100, 100);
    ellipse(950, 400, 100, 100);
    
    ellipse(mouseX, mouseY, 5, 5);
    // glitch cirkel

    
    if (mouseX>915 && mouseX<990 && mouseY>372 && mouseY<435){
        background(random(255), 0, 0);
        fill(rect0.R, rect0.G, rect0.B);
        stroke(0);
        strokeWeight(10); 
        rect(rect0.x, rect0.y, rect0.z1, rect0.z2);
        rect(random(1600), random(1000), random(10, 20), random(10, 20));
        rect(random(1600), random(1000), random(10, 20), random(10, 20));
        rect(random(1600), random(1000), random(10, 20), random(10, 20));
        rect(random(1600), random(1000), random(10, 20), random(10, 20));
        rect(random(1600), random(1000), random(10, 20), random(10, 20));
        rect(random(1600), random(1000), random(10, 20), random(10, 20));
        rect(random(1600), random(1000), random(10, 20), random(10, 20));
        rect(random(1600), random(1000), random(10, 20), random(10, 20));
        ellipse(ellips0.x, ellips0.y, ellips0.z1, ellips0.z2);
        ellipse(random(1600), random(100), random(10, 20), random(10, 20)); 
        ellipse(random(1600), random(100), random(10, 20), random(10, 20)); 
        ellipse(random(1600), random(100), random(10, 20), random(10, 20)); 
        ellipse(random(1600), random(100), random(10, 20), random(10, 20)); 
        ellipse(random(1600), random(100), random(10, 20), random(10, 20)); 
        ellipse(random(1600), random(100), random(10, 20), random(10, 20)); 
        // sang
        song.setVolume(1.0);

        // glitch tekst 
        textSize(random(10, 100));
        text("Danger", random(1000), random(800));
        textSwitch.x = random(1000);
        textSwitch.y = random(800); 
    } else {
        textSwitch.x = 650; 
        textSwitch.y = 250; 
        song.setVolume(0.0);
        }
    
    //cirkel 1 
    if (mouseX>465 && mouseX<534 && mouseY>372 && mouseY<435){
        fill (86, 244, 66);
        ellipse(500, 400, 100, 100); 
    }
    //cirkel 2  
        if (mouseX>618 && mouseX<688 && mouseY>372 && mouseY<435){
          fill (86, 244, 66);
        ellipse(650, 400, 100, 100);  
        }
    
    //cirkel 3 
            if(mouseX>763 && mouseX<840 && mouseY>372 && mouseY<435){
                fill (86, 244, 66);
        ellipse(800, 400, 100, 100); 
    
            }
    //tekst
    textSize(40);  
    text("Switches", textSwitch.x, textSwitch.y);
    console.log("mouseY"); 
    }
 