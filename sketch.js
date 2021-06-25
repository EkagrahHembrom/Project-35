var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;
var feedPet, addFood

function preload(){
   dogImg=loadImage("Images/Dog.png");
   dogImg1=loadImage("Images/happy dog.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
  dog=createSprite(800,200,150,150)
  dog.addImage(sadDog);
  dog.scale=0.15;
   
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}

// function to display UI
function draw() {
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
    fedTime+database.ref('refTime');
    fedTime.on("value", functtion(data){
      lastFed=data.val();

  });

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(15);
  fill(255,255,254);
    textSize(15);
    if(lastFed>=12){
        text("Last feed : 12 AM, 350,30");
    }else if (lastFed==0){
        text("last Feed : 12 AM", 350, 30);
        text("last Fedd : "+ lastFed + "AM", 350,30);

  //text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS)
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}