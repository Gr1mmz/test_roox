import React from "react";
import classes from "./Input.module.scss";

interface InputProps {
    value?: string,
    type: string,
    label: string,
    id: string,
    disabled?: boolean
}

const Input: React.FC<InputProps> =
    ({
         value,
         type,
         label,
         id,
         disabled
     }) => {
    return (
        <div className={classes.wrapper}>
            <label htmlFor={id}>{label}</label>
            <input className={classes.input} id={id} type={type} disabled={disabled} value={value}/>
        </div>
    );
};

export default Input;