const mongoose = require("mongoose");
const chatModel = mongoose.Schema(
    {
        userid: {type:mongoose.Schema.Types.ObjectId},
        messageData:{type:Object}
          
        
       

}
)
const Chat = mongoose.model("Chat",chatModel);
module.exports=Chat
