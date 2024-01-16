import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Alert,
    Button,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    TextField,
} from "@mui/material";
import { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import backgroundImage from "../component/Assets/bgimg4.png";
function Adminlogin() {

    const [formData, setFormData] = useState({
        admin_name: '',
        password: '',
    });

    const [validationMessage, setValidationMessage] = useState("");
    const [valid, setValid] = useState(false);
    const [success, setSuccess] = useState(false);

    const [captcha, setCaptcha] = useState(generateRandomCaptcha());
    const [captchaInput, setCaptchaInput] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const navigate = useNavigate();

    const validateForm = () => {

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (formData.admin_name.trim() === "" || formData.password.trim() === "") {
            setValidationMessage("Please enter both username and password");
            return false;
        }

        return true;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        let validationMsg = '';

        if (!validateForm()) {
            validationMsg = "Please enter both username and password";
        } else if (captchaInput !== captcha) {
            validationMsg = "Captcha validation failed. Please try again.";
            setValid(true);
            setSuccess(false);
        } else {
            try {
                const response = await axios.post('http://localhost:8080/admin/login', formData);

                if (response.status === 200) {
                    console.log('User Logged successfully');
                    setSuccess(true);
                    navigate('/adminhome');
                }
                else {
                    console.error('Failed to Login user');
                    validationMsg = "enter valid credentials";
                    setSuccess(false);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    validationMsg = "enter valid credentials";
                }
                else {
                    console.error('Error during registration:', error);
                    validationMsg = "unexpected error occured";
                }
                setSuccess(false);
            }
        } setTimeout(() => {
            setValidationMessage(validationMsg);
        }, 0)
    };

    const refreshString = () => {
        setCaptchaInput("");
        setCaptcha(generateRandomCaptcha());
    };

    return (
        <section class="bg-white dark:bg-gray-900" style={{
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
                    <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-red-400 to-orange-500 lg:inline">Tastify</span>
                </h1>
                <b><p class="px-0 mb-8 text-lg text-black-600 md:text-xl lg:px-50">
                    Satisfy your cravings.<br/>Just order all your favourite meals from your near by restaurants.
                </p></b>
            </div>
            <div class="container px-6 py-12 mx-auto">
                <div class="lg:flex lg:items-center lg:-mx-6">
                    <div class="mt-8 lg:w-1/2 lg:mx-6">
                        <div
                            class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                            <h1 class="text-lg font-medium text-gray-700">Admin Login</h1>

                            <form class="mt-6">
                                <div class="flex-1">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">UserName</label>
                                    <input name="admin_name" type="text" value={formData.admin_name} placeholder="Enter your Username" onChange={handleChange} class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div class="flex-1 mt-6">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <input type="password" name="password" value={formData.password} placeholder="Enter your password." onChange={handleChange} class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <React.Fragment>
                                    {success && (
                                        <Alert class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                            Successful
                                        </Alert>
                                    )}
                                    <div className="card">

                                        <Divider />

                                        <CardContent>
                                            <CardActions>
                                                <div className="h3">{captcha}</div>
                                                <Button
                                                    startIcon={<RefreshIcon />}
                                                    onClick={() => refreshString()}
                                                ></Button>
                                            </CardActions>


                                            <label>Enter Captcha</label>
                                            <TextField
                                                value={captchaInput}
                                                onChange={(e) => setCaptchaInput(e.target.value)}
                                                class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                            />
                                        </CardContent>
                                    </div>
                                </React.Fragment>
                                <button type="submit" class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-400 rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50" onClick={handleSubmit}>
                                    Login
                                </button>
                            </form>
                            {validationMessage && (
                                <p className="text-red-500">{validationMessage}</p>
                            )}
                            {valid && (
                                <p className="text-red-500">
                                    Captcha validation failed. Please try again.
                                </p>
                            )}
                            {success && <p className="text-green-500">Login successful!</p>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Adminlogin;

function generateRandomCaptcha() {
    return Math.random().toString(36).slice(8);
}