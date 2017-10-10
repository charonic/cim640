var posX = 0;
var posY = 0;
// initializing at 0 makes it a global period.


function setup(){
 createCanvas(1000,500);
 background(125);
 background(63,87,80);
 background("yellow");
 ;

    //posX= width/2;
    //posY= height/2;
    
    posX=250;
    posY=250;
}

function draw(){
    //noStroke(); removes stroke from all the things
    stroke(0);
    strokeWeight(1);
    fill("white");
    ellipse(posX, posY,100,100);
    //the x-y grid starts in the top left, y increases downwards    
    //this width/2, height/2 will always be in the center of the screen.
    fill("red");
    arc(posX+5, posY+30, 20,20, 0, PI);
    
    stroke(125,0,0);
    line(posX - 25, posY + 30, posX+25, posY+30);
    
    fill("white");
    ellipse(posX-20,posY-20 , 20,10);
    
    fill("white");
    ellipse(posX+20, posY-20,20,10);
    
    fill("purple");
    ellipse(posX+20, posY-20, 10,8);
    
    fill("purple");
    ellipse(posX-20, posY-20, 10,8);

    
    
    fill("red");
    ellipse(posX+5, posY, 10,15 );
    
    fill("yellow");
    noFill();
    strokeWeight(35); //making this a heavier weight will give you more "hair"
    arc(posX, posY-17.6,100,100, PI,TWO_PI);
    
    strokeWeight(10);
    stroke("grey");
    line(posX+3,posY+54, posX+3, posY+150);
    
    line(posX-100, posY+80, posX+3,posY+150);

    line(posX+100, posY+80, posX+3,posY+150);
    
    line(posX+3, posY+54, posX+3,posY+500);
    
    
    stroke("black");
    line(posX-100, posY-80, posX-100, posY+80);
    
    strokeWeight(1);
    fill("red");
    ellipse(posX-100,posY-80, 100,120);
    
    strokeWeight(1);
    fill("white");
    triangle(posX-40,posY-75,posX,posY-200,posX+40, posY-75);
    
    strokeWeight(1);
    fill("green");
    ellipse(posX, posY-175,10,10);
    
     strokeWeight(1);
    fill("red");
    ellipse(posX-10, posY-87,23,23);
    
    strokeWeight(1);
    fill("pink");
    ellipse(posX+20, posY-100,20,20);
    
    strokeWeight(1);
    fill("yellow");
    ellipse(posX, posY-130,24,30);
    
    strokeWeight(1);
    fill("orange");
    ellipse(posX+30, posY-86,10,19);
   
    strokeWeight(1);
    fill("blue");
    ellipse(posX-15, posY-105,20,14);
    
    
    //points are not affect by fill, but a by a "stroke", which applies to the entire function.
    
    //fills will need to be placed in front of every shape, else thy'll take the first fill
}
