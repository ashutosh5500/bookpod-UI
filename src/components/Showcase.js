import React from 'react';
import CustomButton from "../generic/CustomButton";

const Showcase = () => {
    return (

        <div className={"Showcase"}>
            <h1>Home of <span>100,000+</span> books and podcasts</h1>
            <p>Get the latest books and listen to the podcasts all in one place</p>
            <CustomButton btnText={"Get Started"}/>
        </div>

    );
};

export default Showcase;