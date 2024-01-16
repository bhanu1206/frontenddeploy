import React from "react";
import Navbar from "./Navbar";
import ChatBotTastify from "./ChatBotTastify";
import backgroundImage from "../component/Assets/bg11.png";
function History(){
return(
    <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        
      }}>
        <Navbar/>
        Order History
        <ChatBotTastify/>
    </div>
)
}

export default History;