// function getData(getlength){
//     console.log("fetching the data....")
//     setTimeout(()=>{
//         let arr=[1,2,4,6,7];
        
//         getlength(arr);
//     },2000)
// }
// function getlength(arr){
//     console.log(` Length of array is ${arr.length}`);
// }
// getData(getlength);


// let url1="www.xyz.com";
// let url2="www.pqr.com";
// let url3="www.abc.com";
// Download1(url1,url2,url3,Process1);
// function Download1(url1,url2,url3,Process1){
//   console.log("Downloading Image 1");
//   setTimeout(()=>{
//     Process1(url1,url2,url3,Download2);
//   },2000)
// }
// function Download2(url2,url3,Process2){
//     console.log("Downloading Image 2");
//   setTimeout(()=>{
//     Process2(url2,url3);
//   },4000)
// }
// function Download3(url3,Process3){
//     console.log("Downloading Image 3");
//   setTimeout(()=>{
//     Process3(url3);
//   },5000)
// }
// function Process1(url1,url2,url3,Download2){
//     console.log("Processing image 1....");
//     console.log(`Image 1 processed ${url1}`);
//     setTimeout(()=>{
//         Download2(url2,url3,Process2);
//     },3000)
// }
// function Process2(url2,url3){
//     console.log("Processing image 2....");
//     console.log(`Image 2 processed ${url2}`);
//     setTimeout(()=>{
//         Download3(url3,Process3);
//     },4000)
// }
// function Process3(url3){
//     console.log("Processing image 3....");
//     console.log(`Image 3 processed ${url3}`);
// }

let obj={
    FirstName:"Disha",
    LastName:"Sachdeva",
    Dob:"02/07/2002"
}
getData(PrintData,obj);
function getData(PrintData,obj){
    console.log("Getting Data....");
    setTimeout(()=>{
        PrintData(obj);
    },2000);
}
function PrintData(obj){
    console.log(obj.Dob);
}