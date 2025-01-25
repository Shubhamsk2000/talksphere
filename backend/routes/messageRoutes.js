import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();
import { sendMessage, getMessages } from "../controllers/messageController.js";

router.get('/:id', protectRoute, getMessages);
router.post('/send/:id',protectRoute, sendMessage);



export default router;