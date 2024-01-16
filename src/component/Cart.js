import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import backgroundImage from "../component/Assets/logo2.jpg";
import axios from "axios";
import ChatBotTastify from "./ChatBotTastify";
import { Link } from "react-router-dom";
import "./Cart.css";
function Cart(){

  const{itemId} = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {

    axios.get(`http://localhost:8080/cartitem/${itemId}`).then(res =>{
        console.log(res.data);
        setItems(res.data);
    })
    .catch((error) => console.log(error));
},[itemId]);
return(
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment:"fixed",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color:"black"
  }}>
        <Navbar/>
        <h1>Cart</h1>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
         items.map(item=> (
            <tr key={item.itemId} style={{backgroundColor:"white"}}>
              <td>{item.itemName}</td>
              <td>{item.price}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <Link to={`/checkout/${itemId}`}>
      <button id="check-btn">Checkout</button>
      </Link>
        <ChatBotTastify/>
    </div>
)
}

export default Cart;