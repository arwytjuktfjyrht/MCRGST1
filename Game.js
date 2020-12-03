class Game{
    constructor(){

    }
    //getState() will simply read the game state from the database.

    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    } 

    //update(state) will update the gameState in the database to a value
    //passed to it inside the parentheses
    update(state){
        database.ref("/").update({
            gameState:state
        });
    }

    //start() function which will start the game and display
    //on the screen depending on the state of the game.

    start(){
        if(gameState==0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }
}