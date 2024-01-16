import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import backgroundImage from "../component/Assets/bgimg4.png";
function RestaurantRegister() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        restaurantName: '',
        address: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // Add validation logic for each field
        if (!formData.username.trim()) {
            newErrors.username = "Username is required";
        }

        if (!formData.restaurantName.trim()) {
            newErrors.email = "Name is required";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = "Password must contain atleast one uppercase,number,special symbol."
        }

        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        }

        setErrors(newErrors);

        // Returns true if there are no errors
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:8080/restaurant/register', formData);

                if (response.status === 200) {
                    console.log('User registered successfully');
                    navigate("/restaurantlogin");
                } else {
                    console.error('Failed to register user');
                }
            } catch (error) {
                console.error('Error during registration:', error);
            }
        }
    };

    return (

        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}>
            <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-left">
                <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                    <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-orange-400 to-orange-500 lg:inline">Tastify</span>
                </h1>
                <b><p class="px-0 mb-8 text-lg text-black-600 md:text-xl lg:px-50">
                    Satisfy your cravings.<br/>Just order all your favourite meals from your near by restaurants.
                </p></b>
            </div>
            <div class="container px-6 py-12 mx-auto" >
                <div class="lg:flex lg:items-center lg:-mx-6">
                    <div class="mt-8 lg:w-1/2 lg:mx-6">
                        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                        Register your Restaurant Here! 
                                    </h2>

                                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
                                            <div>
                                                <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
                                                    UserName
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="username"
                                                        name="username"
                                                        type="text"
                                                        value={formData.username}
                                                        onChange={handleChange}
                                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-black-400 dark:focus:border-black-400 focus:ring-black-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                                    />
                                                    {errors.username && <p className="text-red-500">{errors.username}</p>}
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="restaurant_name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    RestaurantName
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="restaurantName"
                                                        name="restaurantName"
                                                        type="text"
                                                        value={formData.restaurantName}
                                                        onChange={handleChange}
                                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                                    />
                                                </div>
                                                {errors.restaurantName && <p className="text-red-500">{errors.restaurantName}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Password
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                                    />
                                                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Address
                                                </label>
                                                <div className="mt-2">
                                                    <textarea
                                                        id="address"
                                                        name="address"
                                                        onChange={handleChange}
                                                        value={formData.address}
                                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                                    ></textarea>
                                                    {errors.address && <p className="text-red-500">{errors.address}</p>}
                                                </div>
                                            </div>

                                            <div>
                                                <p className="mt-10 text-center text-sm text-gray-500">
                                                    <button
                                                        type="button"
                                                        onClick={handleSubmit}
                                                        className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        Register
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

    );
}

export default RestaurantRegister;
