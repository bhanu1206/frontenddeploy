import React from "react";
import Navbaradmin from "./Navbaradmin";
import { useState,useEffect } from "react";
import axios from "axios";
import backgroundImage from "../component/Assets/bg11.png";
function Feedback(){const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:8080/getfeedback")
        .then((result) => {
          console.log(result.data);
          setPosts(result.data);
        })
        .catch((error) => console.log(error));
    }, []);

    return(
        <div  style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          
        }}>
            <Navbaradmin/>
            <div>
      <br/><br/><br></br><br></br><br/>
      <table class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
        <thead>
          <tr class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
          
            <td>Restaurant ID</td>
            <td>Feedback</td>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(
              data =>
                <tr key={data.feedbackId}>
                  <td>{data.restaurant_id}</td>
                  <td>{data.feedback}</td>
                </tr>
            )
          }
        </tbody>
      </table>
    </div>
        </div>
    )
}

export default Feedback;