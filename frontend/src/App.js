



import Homepage from "./Pages/Homepage";


import './App.css';
import { Routes, Route } from "react-router-dom";
import JoinChat from "./Pages/JoinChat";

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} exact/>
        <Route path="/join" element={<JoinChat/>} exact/>
        </Routes>
        </div>
  );
}

export default App;
