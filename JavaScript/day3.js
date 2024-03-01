//promises

//q1

// let success=false;
// function fetchData(){
//     return new Promise((resolve,reject)=>{
//        console.log("fetching the data");
//        setTimeout(()=>{
//           if(success){
//             let data={
//                 name:"Disha",
//                 dob:"02/06/2002"
//             }
//             console.log("Data is fetched");
//             resolve(data);
//           }
//           else{
//             reject("There is some Error");
//           }
//        },1000)
//     })
// }
// fetchData().then((data)=>{
//     console.log(data.name);
// }).catch((data)=>{
//     console.log(data);
// }).finally(()=>{
//     console.log("Everything is completed");
// })

//q2

// let p=new Promise((resolve,reject)=>{
//       console.log("Fetching the data....");
//       let data={
//         name:"Disha",
//         Needbreak:5      
//       }
//       setTimeout(()=>{
//         resolve(data);
//       },5000)
// })

// p.then((data)=>{
//   return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          resolve(data.Needbreak);
//       },1000)
//   })
// }).then((breaktime)=>{
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log(` you need ${breaktime} min break so calculating the amt....`)
//          resolve(breaktime*100);
//        },2000)
//    })
// }).then((reduction)=>{
//     console.log(reduction);
// })

//q3

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//        let data=[12,23,45,20];
//        setTimeout(()=>{
//          resolve(data);
//        },3000)
//     })
// }

// function filterData(data){
//     return new Promise((resolve,reject)=>{
//         let newdata=[];
//        for(let i=0;i<data.length;i++){
//         if(data[i]%2==0){
//            newdata.push(data[i]);
//         }
//        }
//        setTimeout(()=>{
//          resolve(newdata);
//        },4000)
//     })
// }

// function sumData(data){
//     return new Promise((resolve,reject)=>{
//         let sum=0;
//        for(let i=0;i<data.length;i++){
//           sum=sum+data[i];
//        }
//        setTimeout(()=>{
//          resolve(sum);
//        },2000)
//     })
// }

// async function FindingAnswer(){
//     let data=await fetchData();
//     let evendata=await filterData(data);
//     let finalsum=await sumData(evendata);
//     console.log(finalsum);
// }

// FindingAnswer();

//q4 using filter and reduce

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//        let data=[12,23,45,20];
//        setTimeout(()=>{
//          resolve(data);
//        },3000)
//     })
// }

// function filterData(data){
//     return new Promise((resolve,reject)=>{
//         let newdata=data.filter((val)=>{
//             return val%2==0;
//         });
       
//        setTimeout(()=>{
//          resolve(newdata);
//        },4000)
//     })
// }

// function sumData(data){
//     return new Promise((resolve,reject)=>{
        
//         let sum=data.reduce((acc,val)=>{
//           return acc+val;
//         },0)
//        setTimeout(()=>{
//          resolve(sum);
//        },2000)
//     })
// }

// async function FindingAnswer(){
//     let data=await fetchData();
//     let evendata=await filterData(data);
//     let finalsum=await sumData(evendata);
//     console.log(finalsum);
// }

// FindingAnswer();

// promise functions..
// .all,.race,.any,.allSettled

let p1=new Promise((resolve, reject) => {

  console.log("promise 1");
  setTimeout(()=>{
    resolve(20)
  },1000);
  
})
let p2=new Promise((resolve, reject) => {
    console.log("promise 2");
    setTimeout(()=>{
      resolve(30);
    },2000)
})
let p3=new Promise((resolve, reject) => {
  console.log("promise 3");
  setTimeout(()=>{
    resolve(40);
  },3000)
})
Promise.all([p1,p2,p3]).then((data)=>{
  console.log(data);
})
Promise.race([p1,p2,p3]).then((data)=>{
  console.log(data);
})
Promise.any([p1,p2,p3]).then((data)=>{
  console.log(data);
})
Promise.allSettled([p1,p2,p3]).then((data)=>{
  console.log(data);
})


