import mongoose from 'mongoose'
import Tracker from "../mode.js";
const CheckToday=async(Today,Data)=>{
    try{
      
        //This code for updating the data for every sec or every 5 sec
        const ExistingRecord =await Tracker.findOne({Day:Today}) 
        const {App, time, MemoryUsage} = {...Data};
       
        if(ExistingRecord){
         
            const ExistingData=ExistingRecord.Data.has(App) || false

            if(ExistingData){
               const data=ExistingRecord.Data.get(App)
               ExistingRecord.Data.set(App,{
                time:data.time + time,
                MemoryUsage: data.MemoryUsage + MemoryUsage
               })
            }
            else{
             ExistingRecord.Data.set(App,{
                time:time,
                MemoryUsage:MemoryUsage 
             }
             )
            }
        await ExistingRecord.save();
      }
      else{
           const newData=await Tracker.create({
            Day:Today,
            Data: {
                [App]: {
                    time: time,
                    MemoryUsage: MemoryUsage
                }
            }
           })
      }
      return;     
    }catch(err){
        console.error("Error checking today's record:", err);
    }
}

export default CheckToday;