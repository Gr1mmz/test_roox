import React from 'react';
import classes from "./Button.module.scss";

interface ButtonProps {
    success?: boolean,
    disabled?: boolean,
    children: React.ReactNode | React.ReactChild,
}

const Button: React.FC<ButtonProps> =
    ({
         success,
         disabled,
         children
    }) => {
    return (
        <button className={success ? `${classes.btn} ${classes.success}` : `${classes.btn}`} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;