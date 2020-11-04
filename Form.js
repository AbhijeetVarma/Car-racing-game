class Form{
   constructor(){
    this.NameInput = createInput('Nickname')
    this.greeting = createElement('h1')
    this.play = createButton('PLAY WITH FRIENDS')
   }

   hide(){
    this.greeting.hide()
    this.play.hide()
    this.NameInput.hide();
}
   display(){
    var title = createElement('h1')
    title.html("Abhijeet's Car Racing Game And Friends")
    title.position(250,200)

    
    this.NameInput.position(500,500)

    
    this.play.position(500,700)

    
    this.play.mousePressed( ()=>{
        this.NameInput.hide();
        this.play.hide();
        player.name = this.NameInput.value();
        playerCount = playerCount + 1;
        player.index= playerCount
        player.update()
        player.updateCount(playerCount);
        this.greeting.html("Welcome "+ player.name)
        this.greeting.position(500,500)
    })
        
    
}
    

   
} 