import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
export const seeHotel = async (req,res)=>{
try{
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
}catch(err)
{
    res.status(500).json(err);
}
};
export const requestedHotel = async (req,res)=>{
    const city = req.query.city;
    const country = req.query.country;
    try{
        const hotel = await Hotel.find({country:country,city:city});
        res.status(200).json(hotel);
    }catch(err)
    {
        res.status(500).json(err);
    }
    };
export const featuredHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.find().limit(req.query.limit);
        res.status(200).json(hotel);
    }catch(err)
    {
        res.status(500).json(err);
    }
    };
    export const countryHotel = async (req,res)=>{
        try{
            const hotel = await Hotel.find({country:{$ne:"India"}}).limit(req.query.limit);
            res.status(200).json(hotel);
        }catch(err)
        {
            res.status(500).json(err);
        }
        };
export const seeAllHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.find();
        res.status(200).json(hotel);
    }catch(err)
    {
        res.status(500).json(err);
    }
    };

export const deleteHotel = async(req,res)=>{
    try{
       await Hotel.findByIdAndDelete(req.params.id);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}
export const  newHotel = async (req,res)=>{
    const newHotel = new Hotel(req.body);
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}
export const  updateHotel = async (req,res)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{ $set: req.body});
        res.status(200).json(updatedHotel);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}
export const getHotelRoom = async(req,res)=>{
  try{
const a = req.params.id;
const hotel = await Hotel.findById(a);
const list = await Promise.all(hotel.rooms.map(room=>{
    return Room.findById(room);
}));
res.status(200).json(list)
  }
  catch(err){
  }  
}