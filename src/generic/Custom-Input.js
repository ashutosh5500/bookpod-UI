import React from 'react';
import './generic.scss'

const CustomInput = () => {
    return (
        <div className={"CustomInput"}>
            <div className={"SearchIcon"}>
                <i className="fas fa-search"/>
            </div>
            <input placeholder={"Search..."}/>
        </div>
    );
};

export default CustomInput;