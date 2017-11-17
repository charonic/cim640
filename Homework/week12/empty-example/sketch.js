var interfaceItems = [];



var imageArray = [];

var currentPicture = 0;
//have to make a variable like showImageCounter, and have the image counter be a ++, problems include having the showImageCounter go past the Array limits
var showImage = false;
var showImage1 = false;
var showImage2 = false;
var showImageCounter = 2;

function preload() {

imageArray.push(loadImage('assets/leftarrow.jpg'));
imageArray.push(loadImage('assets/rightarrow.jpg'));
imageArray.push(loadImage('assets/whitespace.png'));
imageArray.push(loadImage('assets/redapple.jpg'));
imageArray.push(loadImage('assets/banana.png'));
imageArray.push(loadImage('assets/dragonfruit.jpg'));


//0,1,2,3,4

}


function setup(){
  createCanvas(400,400);
//buttons
  interfaceItems.push(new interface(100,200,50, imageArray[0]));
  interfaceItems.push(new interface(200,200,50, imageArray[1]));
  


}

//maybe randomize the images
function draw(){
  background(255);

    image(imageArray[showImageCounter], 100,0,imageArray[2].width/3,imageArray[2].height/3);

  interfaceItems[0].check();
  interfaceItems[0].display();
  interfaceItems[1].check();
  interfaceItems[1].display();
    
  //console.log(interfaceItems[0].check());

}


function mousePressed(){
  if(interfaceItems[0].check() == true){
    showImageCounter--;
      //showImage = true;
  } if (showImageCounter <= 2){
      showImage2 = true;
  }
    
    
    //if(showImage == true){
    //background(255); 
      
      
 //}

  if(interfaceItems[1].check() == true){
      showImageCounter++;
      //showImage1= true;  
  } if (showImageCounter >= 4) {
      imageArray[4]
      
  }
      
   
}



function interface(tempX, tempY, tempBoxSize, tempImage){
  this.x  = tempX;
  this.y = tempY;
  this.boxSize = tempBoxSize;
  this.img = tempImage;
  this.overlay = false;

  this.display = function(){
    image(this.img, this.x, this.y, this.boxSize, this.boxSize);

    if(this.overlay == true){
      fill(255,200);
      rect(this.x, this.y, this.boxSize, this.boxSize);
    }
  }

  this.check = function(){
    if(mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;
      return false;
    }
  }

}