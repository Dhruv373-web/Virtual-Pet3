function preLoad() {
  var bedroom = addImage("Bedroom");
  var garden = addImage("Garden");
  var washRoom = addImage("Washroom");

  bedroom = loadImage("Bedroom");
  garden = loadImage("Garden");
  washRoom = loadImage("Washroom");
}


function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
  database = firebase.database();
}

var  changingameState , readingameState = 0;
foodStock=database.ref('Food');
foodStock.on("value", readStock);

readState = database.ref('gameState');
readtState.on("value", function(data){
  gameState = data.val();
})

function draw() {
  background(255,255,255);  
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}

fedTime = database.ref('FeedTime');
fedTime.on("value", function(data){
lastFed = data.val();
});

}
  drawSprites();


function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if(x <= 0){
    x = 0;
  }

  else{
    x = x -1;
  }

  database.ref('/').update ({
    Food: x
  })
}

display(){
  var x = 80, y = 100;

  imageMod(CENTER);
  image(this.image, 720,220,70,70);

  if(this.foodStock != 0){
    for (var i = 0; i<this.foodStock; i++){
      if(i%10 == 0){
        x = 80;
        y = y +50;
      }
      image(this.image, x,y,50,50);
      x = x +30
    }
  }

  if(gameState = "Hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();
  }
  else{
    feed.show();
    addFood.show();
    dog.addImage(sadDog);
  }
}



