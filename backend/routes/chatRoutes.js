const express = require("express");
const { accessChat,postChat} = require("../controllers/userControllers.js");
// const { protect } = require("../middlewires/authMiddleware");
const router = express.Router();



router.post("/chat",postChat);
module.exports=router;