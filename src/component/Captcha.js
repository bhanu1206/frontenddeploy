import {
    Alert,
    Button,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";


export const Captcha = () => {
    const randomString = Math.random().toString(36).slice(8);
    const [captcha, setCaptcha] = useState(randomString);
    const [text, setText] = useState("");
    const [valid, setValid] = useState(false);
    const [success, setSuccess] = useState(false);

    const refreshString = () => {
        setText("");
        setCaptcha(Math.random().toString(36).slice(8));
    };

    const matchCaptcha = (event) => {
        event.preventDefault();
        if (text === captcha) {
            setValid(false);
            setSuccess(true);
        } else {
            setValid(true);
            setSuccess(false);
        }
    };

    return (
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
                            
                            class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        />

                        <Button
                            onClick={matchCaptcha}
                            class="w-50 px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        >
                            Submit
                        </Button>
                    
                </CardContent>
            </div>
        </React.Fragment>
    );
};