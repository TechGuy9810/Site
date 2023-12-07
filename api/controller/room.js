import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";


export const createRoom = async (req,res)=>{
const hotelId = req.params.hotelid;
const newRoom = new Room(req.body);
try{
    const savedRoom = await newRoom.save();
    try{
     await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id},});
    } catch(err)
    {
        console.log(err);
    }
    res.status(200).json(savedRoom);
}catch(err)
{
    console.log(err);
}
};
export const updateAvailRoom= async (req,res)=>{
    try{
    await Room.updateOne(
        {"roomNumbers._id":req.params.id},
        {
         $push: {
            "roomNumbers.$.unavDates":req.body.dates
         },   
        });
        res.status(200).json(true);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}
export const seeRoom = async (req,res)=>{
    try{
        console.log(req.query.id);
        const room = await Room.findById(req.query.id);
        res.status(200).json(room);
    }catch(err)
    {
        res.status(500).json(err);
    }
    };

export const deleteRoom = async(req,res)=>{
    const hotelId = req.params.hotelid;
        try{
           await Room.findByIdAndDelete(req.params.id);
           try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $pull:{rooms:req.params.id}
            });
           }
           catch(err)
           {
              res.status(500).json("not found");
           }
           res.status(200).json("room has been deleted");
        }
        catch(err)
        {
            res.status(500).json(err);
        }
    };

export const  updateRoom = async (req,res)=>{
        try{
            const updatedRoom = await Hotel.findByIdAndUpdate(req.params.id,{ $set: req.body});
            res.status(200).json(updatedRoom);
        }
        catch(err)
        {
            res.status(500).json(err);
        }
    }