import React from 'react';
import Img1 from '../assets/images/braithwait.jpeg';
import Img2 from '../assets/images/andrea.jpeg';
import Img3 from '../assets/images/stephen.jpeg';
import Img4 from '../assets/images/jorge amado.jpeg';
import Img5 from '../assets/images/gayle forman.jpeg';
import Img6 from '../assets/images/shashi tharoor.jpeg';
import Img7 from '../assets/images/jkRowling.jpeg';
import Img8 from '../assets/images/john green.jpeg';

const FeaturedWriters = (props) => {
    const featuredWriters = [
        {featuredImage: Img1, featuredName: "E R Braithwaite"},
        {featuredImage: Img2, featuredName: "Andrea Levy"},
        {featuredImage: Img3, featuredName: "Stephen King"},
        {featuredImage: Img4, featuredName: "Jorge Amado"},
        {featuredImage: Img5, featuredName: "Gayle Forman"},
        {featuredImage: Img6, featuredName: "Shashi Tharoor"},
        {featuredImage: Img7, featuredName: "J.K. Rowling"},
        {featuredImage: Img8, featuredName: "John green"},
    ]
    return (
        <div className={"FeaturedWritersContainer"}>
            <div className={"FeaturedWriters"}>
                <h1>Featured Writers</h1>
                <div className={"FeaturedImages"}>
                    {
                        featuredWriters.map(item => <div>
                            <img src={item.featuredImage} alt=""/>
                            <h3>{item.featuredName}</h3>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedWriters;