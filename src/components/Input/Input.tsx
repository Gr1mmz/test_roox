import React, {useRef, useState} from "react";
import classes from "./Input.module.scss";
import {Path, UseFormRegister, UseFormRegisterReturn} from "react-hook-form";
import {UserSubmitForm} from "../../types/types";

interface InputProps {
    value?: string,
    type: string,
    label: string,
    id: Path<UserSubmitForm>,
    disabled: boolean,
    required?: boolean
}
const Input = React.forwardRef(({value, label, type, id, disabled, required}: InputProps, ref) => {
    const [inputValue, setInputValue] = useState(value);
    const onInputChange = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.currentTarget.value);
    };
    return (
        <div className={classes.wrapper}>
            <label className={classes.label} htmlFor={id}>{label}</label>
            {type === "textarea"
                ? <textarea
                    onChange={(e) => onInputChange(e)}
                    className={`${classes.input} ${classes.textarea}`}
                    id={id}
                    disabled={disabled}
                    value={inputValue}
                />
                : <input
                    onChange={(e) => onInputChange(e)}
                    className={`${classes.input}`}
                    id={id}
                    type={type}
                    disabled={disabled}
                    value={inputValue}
                    required={required}
                />
            }
        </div>
    );
});
// const Select = React.forwardRef<HTMLSelectElement, { label: string } & ReturnType<UseFormRegister<IFormValues>>
//     >(({ onChange, onBlur, name, label }, ref) => (
//     <>
//         <label>{label}</label>
//         <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
//             <option value="20">20</option>
//             <option value="30">30</option>
//         </select>
//     </>
// ));
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