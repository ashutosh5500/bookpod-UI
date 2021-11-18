import React from 'react';
import CustomInput from "../generic/Custom-Input";
import './component.scss'

const Header = () => {

    const headerNav = [
        {id: 1, navText: "Home"},
        {id: 2, navText: "Categories"},
        {id: 3, navText: "Podcasts"},
    ]

    return (
        <div className={"Header"}>
            <i className="fas fa-bars HamburgerIcon"/>
            <h1>BookPod.</h1>
            <nav>
                <ul className={"Navigation"}>
                    {
                        headerNav.map(item => <li key={item.id}><a href="#">{item.navText}</a></li>)
                    }
                </ul>
            </nav>
            <CustomInput/>
        </div>
    );
};

export default Header;