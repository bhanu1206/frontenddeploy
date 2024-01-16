import React from "react";
import Navbar from "./Navbar";
import backgroundImage from "../component/Assets/bg11.png";
function Order(){
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
        Order
    </div>
)
}

export default Order;