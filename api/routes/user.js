import express from "express";
import {seeUser} from '../controller/user.js';
const router = express.Router();
router.get("/",seeUser)

export default router;