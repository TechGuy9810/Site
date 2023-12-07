import express from "express";
import {seeHotel,seeAllHotel,newHotel,updateHotel,getHotelRoom,deleteHotel,featuredHotel,countryHotel,requestedHotel} from '../controller/hotel.js';
const router = express.Router();
router.get("/find/:id",seeHotel);
router.get("/",seeAllHotel);
router.get("/featured",featuredHotel);
router.post("/add",newHotel);
router.put("/:id",updateHotel);
router.delete("/:id",deleteHotel);
router.get("/requested",requestedHotel);
router.get("/country",countryHotel);
router.get("/room/:id",getHotelRoom);
export default router;