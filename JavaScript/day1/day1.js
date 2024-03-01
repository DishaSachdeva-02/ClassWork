let select=document.querySelector('select');
let Sleepfunc=(val)=>{
    const para=document.querySelector("#newpara");
    para.innerHTML=`Sleep:${val} hours`;
}
let study=(val)=>{
    const para=document.querySelector("#newpara2");
    para.innerHTML=`Study:${val} hours`;
}
let showcontent=function(){
    const val=select.value;
    switch (val) {
        case "1":
            Sleepfunc(6);
            study(5);
            document.body.style.backgroundColor="purple";
            break;
        case "2":
            Sleepfunc(7);
            study(6);
            document.body.style.backgroundColor="green";
            break;
        case "3":
            Sleepfunc(4);
            study(7);
            document.body.style.backgroundColor="blue";
            break;
        case "4":
            Sleepfunc(6);
            study(8);
            document.body.style.backgroundColor="orange";
            break;
        case "5":
            Sleepfunc(5);
            study(8);
            document.body.style.backgroundColor="red";
            break;
        case "6":
            Sleepfunc(6);
            study(5);
            document.body.style.backgroundColor="yellow";
            break;
        case "7":
            Sleepfunc(8);
            study(2);
            document.body.style.backgroundColor="grey";
            break;

        default:
            break;
    }
}
select.addEventListener('change',showcontent);
