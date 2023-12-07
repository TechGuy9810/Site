import express from "express";
import {seeRoom,createRoom,updateRoom,deleteRoom,updateAvailRoom} from '../controller/room.js';
const router = express.Router();
router.get("/:id",seeRoom);
router.post("/:hotelid",createRoom);
router.put("/:id",updateRoom);
router.delete("/:hotelid/:id",deleteRoom);
router.put("/avail/:id",updateAvailRoom)
export default router;