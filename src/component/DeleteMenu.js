import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Navbaradmin from "./Navbaradmin";
function Deletemenu(){

    const [formData, setFormData] = useState({
        itemId: '',
      });
     
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
     const navigate= useNavigate();
  
      const handleSubmit = async () => {
        try {
    const response = await axios.post('http://localhost:8080/deletemenu', formData);
     
          if (response.status === 200) {
            console.log('Item is deleted.');
            navigate("/adminmenu");
          } else {
            console.error('Action Failed.');
          }
        } catch (error) {
          console.error('Action Failed due to:', error);
        }
      };

    return(
        <div>
            <Navbaradmin/>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit} method="POST">
                        <div>
                            <label  className="block text-sm font-medium leading-6 text-gray-900">
                                Item ID
                            </label>
                            <div className="mt-2">
                                <input
                                    id="itemname"
                                    name="itemId"
                                    type="text"
                                    value={formData.itemName}
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
                                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Delete Item
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Deletemenu;