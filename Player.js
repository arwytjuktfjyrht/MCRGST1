class Player{
    constructor(){
    }
    //to get the playerCount
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
        
    }
    //to update the playerCount in the database.

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        }) 
    }

    //update the player name in the database
    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }
}