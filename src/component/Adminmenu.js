import React from "react";
import Navbaradmin from "./Navbaradmin";
import { useState, useEffect } from "react";
import axios from "axios";
import './Adminmenu.css'
import { useNavigate, Link } from "react-router-dom";
import backgroundImage from "../component/Assets/bg11.png";
function Adminmenu() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/menu");
        setUsers(result.data);
    };
 


    const navigate = useNavigate();
    const adding = () => navigate("/addmenu");
    const deleting = () => navigate("/deletemenu");

    return (
        <div  style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            
          }}>
            <Navbaradmin />
            <div>
                <br /><br />
                <table id="admin-table" cellSpacing={200} class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                    <thead>
                        <tr class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                            <td >Item ID</td>
                            <td>Item Name</td>
                            <td>Restaurant</td>
                            <td>Price</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (

                                <tr key={user.itemId}>
                                    <td>{user.itemId}</td>
                                    <td>{user.itemName}</td>
                                    <td>{user.restaurant.restaurantName}</td>
                                    <td>{user.price}</td>
                                    
                                </tr>
                            )
                            )
                        }

                    </tbody>
                </table>
                <br/><br/>
                <table class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                    <tr>
                       
                        <td><button onClick={deleting} class="w-100 px-2 py-1 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-orange-400" >
                            Delete Item
                        </button><br/></td>
                    </tr>
                    <br/><tr></tr>
                </table>
            </div>
        </div>
    )
}

export default Adminmenu;