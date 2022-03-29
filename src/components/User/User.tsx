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

    const onFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    if (user) {
        return (
            <div className={classes.user}>
                <div className={classes.header}>
                    <h2>Профиль пользователя</h2>
                    <Button onClick={() => setDisabled(prevState => !prevState)}>Редактировать</Button>
                </div>
                <form className={classes.info} onSubmit={(e:React.SyntheticEvent) => onFormSubmit(e)}>
                    <div className={classes.inputsWrapper}>
                        <Input
                            value={user.name} type={"text"} label={"Имя"}
                            id={"name"} disabled={disabled} required
                        />
                        <Input
                            value={user.username} type={"text"} label={"User name"}
                            id={"username"} disabled={disabled} required
                        />
                        <Input
                            value={user.email} type={"email"} label={"E-mail"}
                            id={"email"} disabled={disabled} required
                        />
                        <Input
                            value={user.address.street} type={"text"} label={"Street"}
                            id={"street"} disabled={disabled} required
                        />
                        <Input
                            value={user.address.city} type={"text"} label={"City"}
                            id={"city"} disabled={disabled} required
                        />
                        <Input
                            value={user.address.zipcode} type={"text"} label={"Zip code"}
                            id={"zipcode"} disabled={disabled} required
                        />
                        <Input
                            value={user.phone} type={"tel"} label={"Phone"}
                            id={"phone"} disabled={disabled} required
                        />
                        <Input
                            value={user.website} type={"url"} label={"Website"}
                            id={"website"} disabled={disabled} required
                        />
                        <Input
                            value={""} type={"textarea"} label={"Comment"}
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