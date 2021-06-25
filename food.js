class food
{
      constructer()
      {
          var foodStock, lastFed



 





      }
}
setup(){
feed=createButton("Feed the dog");
feed.position(700,95);
feed.mousePresses(feedDog);

addFood=createButton9"Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);
}

function draw(){
    fill(255,255,254);
    textSize(15);
    if(lastFed>=12){
        text("Last feed : 12 AM, 350,30");
    }else if (lastFed==0){
        text("last Feed : 12 AM", 350, 30);
        text("last Fedd : "+ lastFed + "AM", 350,30);

    }
    }
}
display(){
    food.js()
}

function feedDog(){
  dog.addImgae(happyDog);

  foodObj.updateFoodStock(foodObjs.getFoodStock()-1);
  database.ref('/'.update({
  Food:foodObj.getFoodStock()
  FeedTime:hour()

  if(foodObj.getFoodStock()<=0){
      foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
      foodObj.updateFoodStock(foodObj.getFoodStock()-1);

      database.ref('/').update({
          Food: foodObj.getFoodStock(), 
          FeedTime:hour()
  }
})

}

function addFood(){

    foodS++;
    database.red('/').update{{
        Food: foodS
    })
}
}