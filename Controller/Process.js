import mongoose from 'mongoose'
import Tracker from "./db.js";
export const CheckToday=async(Today,Data)=>{
    try{
        //This code for updating the data for every sec or every 5 sec
      const ExistingRecord =await Tracker.findOne({Day:Today}) 
      if(ExistingRecord){
        const {App, time, MemoryUsage} = {...Data};
        if(exis)
      }        
    }
}