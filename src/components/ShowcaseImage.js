import React from 'react';
import Logo from "../assets/images/pexels-orione-conceição-7923926.jpg"

const ShowcaseImage = () => {
    return (
        <div className={"ShowcaseImage"}>
            <div className="Image" style={{backgroundImage: "url(" + Logo + ")"}}></div>
            <div className="Card">
                <div>
                    <h3>LOREM IPSUM</h3>
                    <h1>Lorem Ipsum is simply dummy text</h1>
                    <p>Lorem Ipsum is simply dummy text orem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
                        orem Ipsum is simply dummy text</p>
                </div>
            </div>
            <div className="SocialIcons">
                <i className="fab fa-twitter"/>
                <i className="fab fa-facebook"/>
                <i className="fab fa-instagram"/>
                <i className="fab fa-linkedin"/>
            </div>
        </div>
    );
};

export default ShowcaseImage;