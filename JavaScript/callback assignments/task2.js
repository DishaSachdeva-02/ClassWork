//daily morning routine

function showering(dressing){
    console.log("Morning Routine..");
    setTimeout(()=>{
        console.log("Takes Shower");
    },1000)
    setTimeout(()=>{
      dressing(havingbreakfast);
    },2000)
}
function dressing(havingbreakfast){
    console.log("Dress up");
    setTimeout(()=>{
      havingbreakfast(office);
    },3000)
}
function havingbreakfast(office){
    console.log("Take my breakfast at 9 am");
    setTimeout(()=>{
      office();
    },4000)
}
function office(){
    console.log("Go for the office at 9:30am");
    setTimeout(()=>{
      console.log("Reach the office at 9:45am");
    },4000)
}

showering(dressing);