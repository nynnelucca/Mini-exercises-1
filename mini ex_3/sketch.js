
//variabler for bolde
var dia = {
x: 150
};

var ball1 =  { 
x: 0 + (dia.x/2), 
y: 0 + (dia.x/2), 
xspeed: 5,
yspeed: 5

}; 

var ball2 = {
x: 650 - (dia.x/2), 
y: 0 + (dia.x/2), 
xspeed:-5,
yspeed: 5
}; 

var ball3 = {
x: 0 + (dia.x/2), 
y: 650 - (dia.x/2), 
xspeed: 5,
yspeed: -5
};

var ball4 ={
x: 650 - (dia.x/2), 
y: 650 - (dia.x/2),   
xspeed: -5,
yspeed: -5
}

//farvevariable throbber
var spinfarve = {
    r: 50,  
    g: 50, 
    b: 50 
}; 

function setup() {
  createCanvas (650, 650); 
    confirm("How long can you wait?"); 
}

function draw(){
background(10); 
balls1();
balls2();
balls3();
balls4(); 
move();
bounce();
drawthrobber();
}

function drawthrobber() {
 push();
  translate(width/2, height/2);
  var cir = 360/40*(frameCount%40);
  rotate(radians(cir));
  noStroke();
  fill(spinfarve.r = spinfarve.r+40, spinfarve.g = spinfarve.g +3, spinfarve.b = spinfarve.b+23);
    if (spinfarve.r && spinfarve.g && spinfarve.b > 250) {
    fill(spinfarve.r = spinfarve.r-2, spinfarve.g = spinfarve.g -2, spinfarve.b = spinfarve.b-3);
     }
    ellipse(0, 20, 10, 10);
     
pop();
}

//funktioner for bolde

function balls1(){
fill (255, 0, 0);
ellipse(ball1.x, ball1.y, dia.x, dia.x);   
}

function balls2(){
fill (0, 255, 0) 
ellipse(ball2.x, ball2.y, dia.x, dia.x);
}

function balls3 (){
fill (0, 0, 255);
ellipse(ball3.x, ball3.y, dia.x, dia.x); 
}

function balls4(){
fill (255, 255, 0); 
ellipse(ball4.x, ball4.y, dia.x, dia.x); 
}

function bounce(){

//ball1    
    
if (ball1.x> (width/2)- (dia.x/2) || ball1.x < 0+(dia.x/2)) {
ball1.xspeed = ball1.xspeed * -1;
}
if (ball1.y > (height/2) - (dia.x/2) || ball1.y < 0+ (dia.x/2)) {
ball1.yspeed = ball1.yspeed * -1;   
}

// ball 2
if (ball2.x > width - (dia.x/2) || ball2.x < (width/2) + (dia.x/2)) {
ball2.xspeed = ball2.xspeed * -1;
}
if (ball2.y > (height/2) - (dia.x/2) || ball2.y < 0 + (dia.x/2)) {
ball2.yspeed = ball2.yspeed * -1;
}
// ball 3
if (ball3.x > (width/2) - (dia.x/2) || ball3.x < 0 + (dia.x/2)) {
ball3.xspeed = ball3.xspeed * -1; 
}
if (ball3.y > height - (dia.x/2) || ball3.y < (height/2) + (dia.x/2)) {
ball3.yspeed = ball3.yspeed *-1; 
} 
//ball 4
if (ball4.x > (width) - (dia.x/2) || ball4.x < (width/2) + (dia.x/2)) {
ball4.xspeed = ball4.xspeed * -1;
}
if (ball4.y > height - (dia.x/2) || ball4.y < (height/2) + (dia.x/2)) {
ball4.yspeed = ball4.yspeed * -1; 
}
}
function move(){
ball1.x = ball1.x + ball1.xspeed; 
    
ball1.y = ball1.y + ball1.yspeed; 

ball2.x = ball2.x + ball2.xspeed;
    
ball2.y = ball2.y + ball2.yspeed;

ball3.x = ball3.x + ball3.xspeed; 
    
ball3.y = ball3.y + ball3.yspeed; 

ball4.x = ball4.x + ball4.xspeed;
    
ball4.y = ball4.y + ball4.yspeed;

}
console.log("Ingen fejl bro"); 