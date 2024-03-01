// todo list reminder

function addingtask(settingreminder){
   let task;
   setTimeout(()=>{
     task=prompt("Enter your task");
     console.log("Your task is added --"+task);
     settingreminder(task,reminderalarm,taskcomplete);
   },3000)
}

function settingreminder(task,reminderalarm,taskcomplete){
   console.log("Set Reminder for task");
   let reminder;
   setTimeout(()=>{
      reminder=prompt("enter reminder");
     
      reminderalarm(reminder);
      taskcomplete()
   },5000)
}
function taskcomplete(){
    console.log("Task is Completed.");
}
function reminderalarm(reminder){
    console.log("Reminder.... It's  "+reminder);
}
addingtask(settingreminder);