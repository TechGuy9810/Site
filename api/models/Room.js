import mongoose from "mongoose";
const {Schema} = mongoose;

const RoomSchema = new mongoose.Schema({

    wifi:{
        type:String
    },
    Freefood:{
        type:String
    },
    Price:{
        type:String,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    roomNumbers:[{number:Number,unavDates:{type:[Date]}}],
},
{timestamps:true});
export default mongoose.model("Room",RoomSchema)