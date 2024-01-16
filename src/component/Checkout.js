import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Checkout.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ChatBotTastify from "./ChatBotTastify";
import backgroundImage from "../component/Assets/bg11.png";
function Checkout(){
    const{itemId}=useParams();
    const[items, setItems] =useState({
        itemName:'',
        price:''
    });
    const{itemName,price}=items;


    useEffect(() =>{
        axios.get(`http://localhost:8080/cartitem/${itemId}`).then(res =>{
        console.log(res.data);
        if(res.data && res.data.length>0){
            const[firstItem]=res.data;
            setItems({itemName: firstItem.itemName, price: firstItem.price});
        }
    })
    .catch((error) => console.log(error));
},[itemId]);
const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/iteminsert', items);

        if (response.status === 200) {
            console.log('Payment Success');
            alert("Order Placed");
            navigate('/addfeedback');
        }
        else {
            console.error('Failed to Login user');
            alert("enter valid credentials");
        }
    } catch (error) {
        if (error.response && error.response.status === 401) {
            alert("enter valid credentials");
        }
        else {
            console.error('Error during registration:', error);
            alert("unexpected error occured");
        }

    }
};

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
        <div>
            <Navbar/>
            <table className="custom-table1" style={{backgroundColor:"white"}}>
                <thead>
                    <tr><td colSpan={2}>PAYMENT </td></tr>
                </thead>
            <tbody>
                <tr><td>CARD NUMBER</td><td></td></tr>
                <tr><td><input type="text" placeholder="card number"/></td><td></td></tr>
                <tr><td>EXPIRY</td><td>CVV</td></tr>
                <tr><td><input type="month" /></td><td><input type="password" placeholder="CVV"/></td></tr>
                <tr><td><button id="btn-c">Cancel</button></td><td><button id="btn-pay" onClick={handleSubmit}>Make Payment</button></td></tr>

            </tbody>
            </table>
            <ChatBotTastify/>
        </div>
        </div>
        
    )
}

export default Checkout;