import React from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
    success?: boolean,
    disabled?: boolean,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

const Button: React.FC<ButtonProps> =
    ({
         success,
         disabled,
         type,
         onClick,
         children
    }) => {
    return (
        <button
            className={success ? `${classes.btn} ${classes.success}` : `${classes.btn}`}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;