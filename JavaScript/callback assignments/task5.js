let player1=true;
let count=1;
function playerturn(rollingDice){
    if(count>3){
        return;
    }
    if(player1==true){
        console.log("It's player 1's turn");
        player1=false;
    }
    else{
        console.log("It's player 2's turn");
        player1=true;
    }
    
    setTimeout(()=>{
        rollingDice(moving);
    },1000)
}
function rollingDice(moving){
    console.log("Rolling the dice..");
    setTimeout(()=>{
        moving(playerturn);
    },2000)
}
function moving(playerturn){
    console.log("Moving on the board");
    count++;
    
    setTimeout(()=>{
        playerturn(rollingDice);
    },2000)
    
}
playerturn(rollingDice);

