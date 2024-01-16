import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import ChatBotTastify from "./ChatBotTastify";
import "./Hometable.css";
import backgroundImage from "../component/Assets/vege.jpg";
class Home extends React.Component {

    state = {
        elements: []
    }

    componentDidMount()
    {
        axios.get("http://localhost:8080/restaurant").then(res =>{
            const elements=res.data;
            console.log(this.state.elements);
            this.setState({elements:elements})
        })
    }

    render(){
    return (

        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment:"fixed",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            
            
          }}>
            <Navbar/>
    
           <table className="custom-tableh">
            <tbody>
                    {
                        this.state.elements && this.state.elements.map(element =>
                            <tr key={element.restaurantId}>
                                <td>
                                <Link to={`/menudetails/${element.restaurantId}`}>
                                <img src="https://images.getrecipekit.com/20211124220241-veg-20biryani.jpg?aspect_ratio=1:1&quality=90&auto_optimize=medium" alt={`Restuarant ${element.restaurantName}Image`}/> 
                                </Link>
                                </td>            
                                <td><b>{element.restaurantName}</b><br/>
                                {element.address}
                                </td>                        
                            </tr>
                           
                            )
                    }
                </tbody>
           </table>
            <ChatBotTastify/>
        </div>
    )
   }
}

export default Home;
