import React, {ChangeEventHandler, Ref} from "react";
import classes from "./Input.module.scss";

interface InputProps {
    value?: string,
    type: string,
    label: string,
    id: string,
    onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
    disabled: boolean,
    required?: boolean,
    error?: string | undefined
}

const Input = React.forwardRef(
    ({
         value,
         label,
         type,
         id,
         onChange,
         disabled,
         required,
         error,
    }: InputProps, ref) => {
    return (
        <div className={classes.wrapper}>
            <label className={classes.label} htmlFor={id}>{label}</label>
            {type === "textarea"
                ? <textarea
                    {...ref}
                    onChange={onChange}
                    className={`${classes.input} ${classes.textarea}`}
                    id={id}
                    disabled={disabled}
                    value={value}
                />
                : <input
                    {...ref}
                    onChange={onChange}
                    className={error ? `${classes.input} ${classes.error}` : `${classes.input}`}
                    id={id}
                    type={type}
                    disabled={disabled}
                    value={value}
                    required={required}
                />
            }
            {error ? <p className={classes.errorText}>{error}</p> : null}
        </div>
    );
});

export default Input;