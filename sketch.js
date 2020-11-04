
var database

var form , game , player
var playerCount = 0;
var gameState ;

var allPlayers

function setup() {
  
  createCanvas(1000,1000);
  database = firebase.database();
game = new GameClass()
game.getState();
game.start()



}

function draw() {
  background(225); 

  if(playerCount === 4){
    game.update(1)
  }

  if(gameState === 1){
    game.play()
  }
   drawSprites();
}



