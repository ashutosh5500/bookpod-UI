import React from 'react';
import CustomInput from "../generic/Custom-Input";
import './component.scss'

const Header = () => {

    const headerNav = ["Home", "Categories", "Podcasts"]

    return (
        <div className={"Header"}>
            <i className="fas fa-bars HamburgerIcon"/>
            <h1>BookPod.</h1>
            <nav>
                <ul className={"Navigation"}>
                    {
                        headerNav.map(item => <li><a href="#">{item}</a></li>)
                    }
                </ul>
            </nav>
            <CustomInput/>
        </div>
    );
};

export default Header;