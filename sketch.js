//variabler
var textControl = {    
x:600,
y:250, 
}
var text1 = {
    x: 500, 
    y: 550, 
}
var text2 = {
    x:650,
    y: 550,
}
var text3 = {
    x:800,
    y: 550,
}
var text4 = {
    x:950,
    y:550,
}
var song; 
function preload(){
song = loadSound('assets/slender.mp3');
}
function setup() {
 createCanvas(1400, 1100);
 song.play(); 
song.loop(); 
song.setVolume(0.0); 
}

function draw() {
    
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
    background( 200);
    strokeWeight(2);
    fill(255);
    ellipse(500, 400, 100, 100);
    ellipse(650, 400, 100, 100);
    ellipse(800, 400, 100, 100);
    ellipse(950, 400, 100, 100);
     
    textSize(60);  
    text("Controls", textControl.x, textControl.y);
    textSize(40);
    text("1", text1.x, text1.y);
    text("2", text2.x, text2.y);
    text("3", text3.x, text3.y);
    text("4", text4.x, text4.y);
    
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
        text("ERROR", random(1000), random(800));
        textControl.x = random(1000);
        textControl.y = random(800);
        text1.x = random(1000);
        text1.y = random(800);
        text2.x = random(1000);
        text2.y = random(800);
        text3.x = random(1000);
        text3.y = random(800);
        text4.x = random(1000);
        text4.y = random(800); 
    } else {
        textControl.x = 600; 
        textControl.y = 250; 
        text1.x = 500; 
        text1.y = 550;
        text2.x = 650; 
        text2.y = 550;
        text3.x = 800;
        text3.y = 550;
        text4.x = 950;
        text4.y = 550; 
        song.setVolume(0.0);
        }
    
    //cirkel 1 
    if (mouseX>465 && mouseX<534 && mouseY>372 && mouseY<435){
        fill (86, 244, 66);
        ellipse(500, 400, 100, 100); 
        text("1", text1.x, text1.y);
        textSize(60);
         text("Controls", textControl.x, textControl.y);
        fill(255);
        textSize(40); 
         text("2", text2.x, text2.y);
        text("3", text3.x, text3.y);
        text("4", text4.x, text4.y);
        }
    //cirkel 2  
        if (mouseX>618 && mouseX<688 && mouseY>372 && mouseY<435){
          fill (86, 244, 66);
        ellipse(650, 400, 100, 100); 
             text("2", text2.x, text2.y);
            textSize(60);
         text("Controls", textControl.x, textControl.y);
        fill(255);
            textSize(40);
         text("1", text1.x, text1.y);
        text("3", text3.x, text3.y);
        text("4", text4.x, text4.y);
        }
    
    //cirkel 3 
            if(mouseX>763 && mouseX<840 && mouseY>372 && mouseY<435){
                fill (86, 244, 66);
        ellipse(800, 400, 100, 100); 
     text("3", text3.x, text3.y);
                textSize(60);
         text("Controls", textControl.x, textControl.y);
        fill(255);
                textSize(40);
         text("2", text2.x, text2.y);
        text("1", text1.x, text1.y);
        text("4", text4.x, text4.y);
            }
     
    console.log("mouseY"); 
    }
 