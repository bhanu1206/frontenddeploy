import React from "react";
import Navbaradmin from "./Navbaradmin";
import backgroundImage from "../component/Assets/bg11.png";
function Adminaccount(){
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
            <Navbaradmin/>
            Admin account
        </div>
    )
}

export default Adminaccount;