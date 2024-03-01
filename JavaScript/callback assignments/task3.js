//coffee order

let arr=["Espresso","Latte/Iced Latte","Black Coffee","Cappuccino"];
let price=[50,60,80,70];
function selectcoffee(addtocart){
    console.log("Select your coffee no");
    for(let i=0;i<arr.length;i++){
        console.log(`${i+1} . ${arr[i]}  ${price[i]}Rs`);
    }
    let coffeeno;
    setTimeout(()=>{
      coffeeno=prompt("Enter the coffee no");
    },2000)
    setTimeout(()=>{
        console.log("Thank you for selecting your coffee . Your coffee will be served soon...");
        addtocart(coffeeno,arr[coffeeno-1],payment);
    },3000)    
}
function addtocart(coffeeno,coffeename,payment){
    console.log("Adding to Cart");
    setTimeout(()=>{
        payment(price[coffeeno-1]);
    },4000)
}
function payment(price){
    console.log(`Total Payment ${price}`);
    setTimeout(()=>{
        console.log("Thank you for the payment");
        console.log("Please wait! your coffee will be served soon");
    },5000)
}
selectcoffee(addtocart);