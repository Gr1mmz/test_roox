import React from 'react';
import classes from "./Button.module.scss";

interface ButtonProps {
    success?: boolean,
    disabled?: boolean,
    children: React.ReactNode | React.ReactChild
}

const Button = ({success, disabled, children}: ButtonProps) => {
    return (
        <div>
            <button className={`${classes.btn}`}>
                {children}
            </button>
        </div>
    );
};

export default Button;