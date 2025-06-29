import activewin from "active-win";
import Tracker from "./db.js";
import CheckToday from "./Controller/Process.js";
import  connectToDB from "./db.js";
let currentApp=undefined;
let Time=0;
let Dt=new Date()
let Today=`${Dt.getDate()}/${Dt.getMonth()+1}/${Dt.getFullYear()}`
console.log("Current Date is ",Today)
//Database connection
connectToDB()
setInterval(async()=>{
let app=await activewin()
const now=Date.now()
if(currentApp!=app.owner.name){
currentApp=app.owner.name
let timeSpent=Math.floor((now-Time)/1000)
Time=now;
let Data={
    App:currentApp,
    time:timeSpent,
    MemoryUsage:app.memoryUsage    
}
CheckToday(Today,Data)

}

},1000)