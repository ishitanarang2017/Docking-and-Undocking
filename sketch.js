var iss,spacecraft,bg,issi,spacecrafti;
var hadDock=false
var sc1,sc2,sc3,sc4;
function preload(){
  bg = loadImage('Images/spacebg.jpg')
  issi = loadImage('Images/iss.png')
  sc1 = loadImage('Images/spacecraft1.png')
  sc2 = loadImage('Images/spacecraft2.png')
  sc3 = loadImage('Images/spacecraft3.png')
  sc4 = loadImage('Images/spacecraft4.png')
}
function setup() {
  createCanvas(800,400);
 spacecraft=createSprite(400, 300);
 spacecraft.addImage(sc1)
 spacecraft.scale=0.1;
 iss=createSprite(330,130)
 iss.scale=0.35;
 iss.addImage(issi)
}

function draw() {
  background(bg);  
  if(!hadDock){
    if(keyDown("UP_ARROW")){
      spacecraft.y-=2;
     spacecraft.scale-=0.0005;
      spacecraft.addImage(sc2);
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.y+=2;
      spacecraft.scale+=0.0005;
      spacecraft.addImage(sc1);
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.x-=2;
      spacecraft.addImage(sc3);
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.x+=2;
      spacecraft.addImage(sc4);
    }
  }
  
  if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10 )){
    hadDock=true;
    textSize(25)
    fill(103,249,255)
    text("Dockedddd Successfullyyyyy",180,300)
    
  }
  drawSprites();
}