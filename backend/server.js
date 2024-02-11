const express = require("express")
const chats = require("./data/data.js")

const http = require("http")
const dotenv = require("dotenv").config()
const colors = require('colors');
const PORT = process.env.PORT||6000
const app = express()
const cors = require('cors')
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
 const chatRoutes = require("./routes/chatRoutes.js");

const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
    // socket.broadcast.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});
app.use(express.json())
connectDB();
app.use("/api/user",userRoutes);
app.use(chatRoutes);
server.listen(3001, () => {
    console.log("SERVER RUNNING");
  });
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`.yellow.bold)
  
})