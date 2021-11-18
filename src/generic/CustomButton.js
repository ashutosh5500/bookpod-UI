import React from 'react';

const CustomButton = (props) => {
    const {btnText} = props
    return (
        <div className={"CustomButton"}>
            <button>{btnText}</button>
        </div>
    );
};

export default CustomButton;