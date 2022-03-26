import React from 'react';
import classes from "./Button.module.scss";

interface ButtonProps {
    success?: boolean,
    disabled?: boolean,
    onClick?: () => void,
    children: React.ReactNode | React.ReactChild,
}

const Button: React.FC<ButtonProps> =
    ({
         success,
         disabled,
        onClick,
         children
    }) => {
    return (
        <button
            className={success ? `${classes.btn} ${classes.success}` : `${classes.btn}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;