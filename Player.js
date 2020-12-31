class Player{

    constructor(){

        this.index = null
        this.Name = null
        this.distance = 0

    }

getCount(){

    var PlayerCountref = database.ref('PlayerCount')
    PlayerCountref.on("value",function(data){

PlayerCount = data.val()

})


}

updateCount(Count){

    database.ref('/').update({
        PlayerCount:Count

    })

    }

update(){

    var PlayerIndex = "Player"+this.index;
    database.ref(PlayerIndex).set({

        Name:this.Name,
       // distance:this.distance

    })
}

static GetPlayerinfo(){

var Playerinfo = database.ref('Players')
Playerinfo.on("value",(data)=>{

AllPlayer = data.val()
console.log("Hi I AM HERE")



})









}











}