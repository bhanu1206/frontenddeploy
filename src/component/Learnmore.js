import React from "react";
import backgroundImage from "../component/Assets/bg4.png";
const Learnmore = () => {
    return(
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: '1em', // Add padding as a style property
            border: '3px solid #faf0eb', // Add border as a style property
          }}>
            
            <b><h1 className="primary-subheading">Welcome to Tastify</h1></b>
            <p style={{ color: 'white'}}>
                <b  style={{ color: '#ffcc99' }}>About Us:</b><br/>
                At Tastify, we're passionate about connecting you with your favorite cuisines.<br/> Our mission is to provide a seamless and delightful food ordering experience right at your fingertips.<br/> We stand out by offering a diverse range of cuisines, quick delivery, and exceptional customer service.
            </p><br/>
            <p style={{ color: 'white' }}>
            <b  style={{ color: '#ffcc99' }}>How It Works:</b><br/>
            Ordering food has never been easier! Browse through our wide selection of restaurants,<br/> choose your favorite dishes, and place your order effortlessly.Enjoy your meal stress-free.
            </p><br/>
            <p style={{ color: 'white' }}>
            <b  style={{ color: '#ffcc99' }}>Our Services:</b><br/>
            From hearty comfort food to exotic delights, we offer an array of cuisines to cater to every palate.<br/> With flexible delivery options, special offers, and loyalty rewards, we strive to make your dining experience memorable.
            </p><br/>
            <p style={{ color: 'white' }}>
            <b  style={{ color: '#ffcc99' }}>FAQs:</b><br/>
            Have questions? Check out our FAQs to find answers to common queries about our app and more.</p><br/>
            <p style={{ color: 'white' }}>
            <b  style={{ color: '#ffcc99' }}>Contact Us:</b><br/>
            Need assistance? Our dedicated customer support team is available to assist you.<br/> Reach out to us via email, phone, or live chat during our service hours.</p><br/>
            <p style={{ color: 'white' }}>
            <b  style={{ color: '#ffcc99' }}>Testimonials:</b><br/>
            Don't just take our word for it! Hear what our happy customers have to say about their experiences with Tastify.</p><br/>
        </div>
    )
}
export default Learnmore;