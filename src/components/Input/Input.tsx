import React, {useState} from "react";
import classes from "./Input.module.scss";
import {UseFormRegister, UseFormRegisterReturn} from "react-hook-form";

interface InputProps {
    value?: string,
    error?: Object,
    type: string,
    label: string,
    id: string,
    disabled?: boolean
}
const Input = React.forwardRef((props: InputProps, ref) => {
    const [inputValue, setInputValue] = useState(props.value);
    const onInputChange = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.currentTarget.value);
    };
    console.log(props.error);
    return (
        <div className={classes.wrapper}>
            <label className={classes.label} htmlFor={props.id}>{props.label}</label>
            {props.type === "textarea"
                ? <textarea
                    onChange={(e) => onInputChange(e)}
                    className={`${classes.input} ${classes.textarea}`}
                    id={props.id}
                    disabled={props.disabled}
                    value={inputValue}
                />
                : <input
                    onChange={(e) => onInputChange(e)}
                    className={props.error ? `${classes.input} ${classes.error}` : `${classes.input}`}
                    id={props.id}
                    type={props.type}
                    disabled={props.disabled}
                    value={inputValue}
                />
            }
        </div>
    );
})
// const Input: React.FC<InputProps> =
//     ({
//          value,
//          type,
//          label,
//          id,
//          disabled
//      }) => {
//     const [inputValue, setInputValue] = useState(value);
//     const onInputChange = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
//         setInputValue(e.currentTarget.value);
//     }
//     return (
//         <div className={classes.wrapper}>
//             <label className={classes.label} htmlFor={id}>{label}</label>
//             {type === "textarea"
//                 ? <textarea
//                     onChange={(e) => onInputChange(e)}
//                     className={`${classes.input} ${classes.textarea}`}
//                     id={id}
//                     disabled={disabled}
//                     value={inputValue}
//                 />
//                 : <input
//                     onChange={(e) => onInputChange(e)}
//                     className={classes.input}
//                     id={id}
//                     type={type}
//                     disabled={disabled}
//                     value={inputValue}
//                 />
//             }
//         </div>
//     );
// };

export default Input;