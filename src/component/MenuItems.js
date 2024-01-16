import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ChatBotTastify from "./ChatBotTastify";
import './MenuItem.css';
import { Link } from "react-router-dom";
import  backgroundImage from "../component/Assets/logo1.jpg";
function MenuItem()  {

    const {restaurantId} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8080/menu/${restaurantId}`).then(res =>{
            console.log(res.data);
            setPosts(res.data);
        })
        .catch((error) => console.log(error));
    },[restaurantId]);
    
   

    return (
        <div
             style={{
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
            <Navbar />
           <table className="custom-table">
    
            <tbody>
                    {
                        posts.map(element =>
                            <tr key={element.itemId}>
                                <td>
                                <img src="https://madhurasrecipe.com/wp-content/uploads/2022/12/Chicken-Biryani-Featured.jpg" alt={`Restuarant ${element.restaurantName}Image`}/> 
                                </td>            
                                <td><b>{element.itemName}</b><br/>
                                <b>₹</b>{element.price}<br/></td>
                                <td> <Link to={`/cart/${element.itemId}`}>
                                <button id="add-to-cart" >ADD</button>
                                </Link>
                                </td>                     
                            </tr>
                           
                            )
                    }
                </tbody>
           </table>
            <ChatBotTastify/>
        </div>
    );
  
}

export default MenuItem;
