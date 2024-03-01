//baking cookies

function mixing(chilling,baking){
    console.log("Your cookie will be served soon");
    setTimeout(()=>{
        console.log("Mixing the batter");
    },1000)
    setTimeout(()=>{
      chilling(baking);
    },2000)
}
function chilling(baking){
    console.log("Chilling the batter");
    setTimeout(()=>{
      baking();
    },3000)
}
function baking(){
    console.log("Baking the cookie");
    setTimeout(()=>{
      console.log("Hurrah!! Your cookie is ready");
    },4000)
}
mixing(chilling,baking);