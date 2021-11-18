import React from 'react';
import Img1 from '../images/braithwait.jpeg';
import Img2 from '../images/andrea.jpeg';
import Img3 from '../images/stephen.jpeg';
import Img4 from '../images/jorge amado.jpeg';
import Img5 from '../images/gayle forman.jpeg';
import Img6 from '../images/shashi tharoor.jpeg';
import Img7 from '../images/jkRowling.jpeg';
import Img8 from '../images/john green.jpeg';

const FeaturedWriters = (props) => {
    const featuredWriters = [
        {id: 1, featuredImage: Img1, featuredName: "E R Braithwaite"},
        {id: 2, featuredImage: Img2, featuredName: "Andrea Levy"},
        {id: 3, featuredImage: Img3, featuredName: "Stephen King"},
        {id: 4, featuredImage: Img4, featuredName: "Jorge Amado"},
        {id: 5, featuredImage: Img5, featuredName: "Gayle Forman"},
        {id: 6, featuredImage: Img6, featuredName: "Shashi Tharoor"},
        {id: 7, featuredImage: Img7, featuredName: "J.K. Rowling"},
        {id: 8, featuredImage: Img8, featuredName: "John green"},
    ]
    return (
        <div className={"FeaturedWritersContainer"}>
            <div className={"FeaturedWriters"}>
                <h1>Featured Writers</h1>
                <div className={"FeaturedImages"}>
                    {
                        featuredWriters.map(item => <div key={item.id}>
                            <img src={item.featuredImage} alt=""/>
                            <h3>{item.featuredName}</h3>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedWriters;