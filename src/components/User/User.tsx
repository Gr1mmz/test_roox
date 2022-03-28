import React, {useState} from "react";
import Button from "../Button/Button";
import classes from "./User.module.scss";
import Input from "../Input/Input";
import {IUser, UserSubmitForm} from "../../types/types";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

interface UserProps {
    user: IUser | null
}

const User: React.FC<UserProps> = ({user}) => {
    const [disabled, setDisabled] = useState(true);
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Fullname is required'),
        username: Yup.string()
            .required("Username is required")
            .min(4, "Username must be at least 4 characters")
            .max(20, "Username must not exceed 20 characters"),
        email: Yup.string().email()
            .required("Email is required")
            .email("Email is invalid"),
        street: Yup.string()
            .required("Street is required"),
        city: Yup.string()
            .required("City is required"),
        zipcode: Yup.string()
            .required("Zipcode is required"),
        phone: Yup.number()
            .required("Phone is required")
            .min(10, "Phone must be at least 10 digits")
            .max(18, "Phone must be at least 18 digits"),
        website: Yup.string().url()
            .required("Website is required"),
        comment: Yup.string()
    });
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onFormSubmit = (data: UserSubmitForm) => {
        console.log(JSON.stringify(data));
    };

    console.log(errors)

    if (user) {
        return (
            <div className={classes.user}>
                <div className={classes.header}>
                    <h2>Профиль пользователя</h2>
                    <Button onClick={() => setDisabled(prevState => !prevState)}>Редактировать</Button>
                </div>
                <form className={classes.info} onSubmit={handleSubmit(onFormSubmit)}>
                    <div className={classes.inputsWrapper}>
                        <Input
                            {...register("name")} value={user.name} type={"text"} label={"Имя"}
                            id={"name"} disabled={disabled} error={errors}
                        />
                        <Input
                            {...register("username")} value={user.username} type={"text"} label={"User name"}
                            id={"username"} disabled={disabled}
                        />
                        <Input
                            {...register("email")} value={user.email} type={"email"} label={"E-mail"}
                            id={"email"} disabled={disabled}
                        />
                        <Input
                            {...register("street")} value={user.address.street} type={"text"} label={"Street"}
                            id={"street"} disabled={disabled}
                        />
                        <Input
                            {...register("city")} value={user.address.city} type={"text"} label={"City"}
                            id={"city"} disabled={disabled}
                        />
                        <Input
                            {...register("zipcode")} value={user.address.zipcode} type={"text"} label={"Zip code"}
                            id={"zipcode"} disabled={disabled}
                        />
                        <Input
                            {...register("phone")} value={user.phone} type={"tel"} label={"Phone"}
                            id={"phone"} disabled={disabled}
                        />
                        <Input
                            {...register("website")} value={user.website} type={"url"} label={"Website"}
                            id={"website"} disabled={disabled} error={errors}
                        />
                        <Input
                            {...register("comment")} value={""} type={"textarea"} label={"Comment"}
                            id={"comment"} disabled={disabled}
                        />
                    </div>
                    <Button success disabled={disabled} type="submit">Отправить</Button>
                </form>
            </div>
        );
    }
    return (
        <div className={classes.user}>
            <div className={classes.header}>
                <h2>Пользователь не найден</h2>
            </div>
        </div>
    )
};

export default User;