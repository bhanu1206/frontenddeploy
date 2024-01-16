import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Checkout.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ChatBotTastify from "./ChatBotTastify";
import backgroundImage from "../component/Assets/bg11.png";
import './AddFeedback.css';
function AddFeedback(){
    
   
    const[formdata, setFormdata]= useState({
        restaurant_id: '',
        feedback: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

   
const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/addfeedback', formdata);

        if (response.status === 200) {
            console.log('Added feeback');
            alert("Added feedback");
            navigate('/user/home');
        }
        else {
            console.error('Failed to Login user');
            alert("enter valid credentials");
        }
    } catch (error) {
        alert("unexpected error occured");

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
           
            <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-left">
                <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                    <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-orange-400 to-orange-500 lg:inline">Tastify</span>
                </h1>
            </div>
            <div class="container px-6 py-12 mx-auto" >
            <div class="lg:flex lg:items-center lg:-mx-6">
            <div class="mt-8 lg:w-1/2 lg:mx-6">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        GIVE YOUR FEEDBACK
                    </h2>
                
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit} method="POST">
                        <div>
                            <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
                                ID
                            </label>
                            <div className="mt-2">
                                <input
                                    id="restaurant_id"
                                    name="restaurant_id"
                                    type="num"
                                    value={formdata.restaurant_id}
                                    onChange={handleChange}
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="feedback" className="block text-sm font-medium leading-6 text-gray-900">
                                FEEDBACK
                            </label>
                            <div className="mt-2">
                                <input
                                    id="feedback"
                                    name="feedback"
                                    type="text"
                                    value={formdata.feedback}
                                    onChange={handleChange}
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
 
                        <div>                     
                            <p className="mt-10 text-center text-sm text-gray-500">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-400 rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
                                    Give Feedback
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
            <ChatBotTastify/>
        </div>
      
        
    )
}

export default AddFeedback;