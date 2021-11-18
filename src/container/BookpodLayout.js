import React from 'react';
import Header from "../components/Header";
import Showcase from "../components/Showcase";
import ShowcaseImage from "../components/ShowcaseImage";
import FeaturedWriters from "../components/FeaturedWriters";


const BookpodLayout = () => {

    return (
        <div>
            <Header/>
            <Showcase/>
            <ShowcaseImage/>
            <FeaturedWriters/>
        </div>
    );
};

export default BookpodLayout;