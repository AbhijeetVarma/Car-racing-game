class Player{

    constructor(){

this.distance =0
this.name = null
this.index = null
    }

    getCount(){
      var countRef =database.ref('playerCount')
      countRef.on("value",function (data){
          playerCount = data.val()
      })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
        
    }

    update(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }

   static getPlayerInfo(){
       var playerInfoRef=  database.ref("players")
       playerInfoRef.on("value",function (data){
           allPlayers = data.val()
       })
    }
    


}