class GameClass{

constructor(){

}

getState(){
    var getStateref = database.ref('GameState')
   
    getStateref.on("value",function (data){
        gameState = data.val()
        

    })
    console.log(getStateref)
}

update(state){

    database.ref('/').update({
        gameState:state
    })
    console.log(gameState)
}

start(){
    if(gameState === 0){
        
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
        
    }
}

play(){
  form.hide()
textSize(20)
  text("GAME START",250,250)

  Player.getPlayerInfo()

  if(allPlayers !== undefined){
     var Dposition = 400
     for(var plr in allPlayers){
       Dposition = Dposition+40;
       text(allPlayers[plr].name +":"+allPlayers[plr].distance,250,Dposition)
     }

  }

  if(keyIsDown(UP_ARROW) && player.index!== null){
      player.distance+= 50
      player.update();      
  }





}





}
