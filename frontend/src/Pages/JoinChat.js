
import io from "socket.io-client";
import { useEffect, useState } from "react";
import ChatPage from "./ChatPage";
import { useNavigate } from "react-router-dom";
const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("userInfo"))
    {
      navigate("/")
    }
 
  }, [])
  
  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <ChatPage socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;