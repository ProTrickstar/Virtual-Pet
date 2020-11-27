//Create variables here
var dog,happyDog,database,foodS,foodStock,diffDog;

function preload()
{
  //load images here
  happyDog = loadImage("images/dogImg.png")
  diffDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dog.addImage("dog",happyDog);
  dog.scale = 0.3;

 
}


function draw() {  
background(46,139,87);
  drawSprites();
  //foodStock = database.ref('Food');
  //foodStock.on("value",readStock);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(diffDog);
  //add styles here
  fill("white");
textSize(12);
Text("Note:Press UP_ARROW Key To Feed Drago Milk")
  
  }
}
function readStock(x){
  foodS = data.val();
}
function writeStock(x){
   if(x<=0){
     x=0
   }else{
    x=x-1;
   
   } 
   database.ref('/').update({
   Food:x
} )
}




