import React, {useState} from 'react';
import Button from '../Button/Button';
import classes from "./User.module.scss";
import Input from "../Input/Input";
import { IUser } from '../../types/types';

interface UserProps {
    user: IUser | null
}

const User: React.FC<UserProps> = ({user}) => {
    const [disabled, setDisabled] = useState(true);
    if (user) {
        return (
            <div className={classes.user}>
                <div className={classes.header}>
                    <h2>Профиль пользователя</h2>
                    <Button onClick={() => setDisabled(prevState => !prevState)}>Редактировать</Button>
                </div>
                <div className={classes.info}>
                    <Input value={user.name} type={"text"} label={"Имя"} id={"1"} disabled={disabled}/>
                    <Input value={user.username} type={"text"} label={"User name"} id={"2"} disabled={disabled}/>
                    <Input value={user.email} type={"email"} label={"E-mail"} id={"3"} disabled={disabled}/>
                    <Input value={user.address.street} type={"text"} label={"Street"} id={"4"} disabled={disabled}/>
                    <Input value={user.address.city} type={"text"} label={"City"} id={"5"} disabled={disabled}/>
                    <Input value={user.address.zipcode} type={"text"} label={"Zip code"} id={"6"} disabled={disabled}/>
                    <Input value={user.phone} type={"tel"} label={"Phone"} id={"7"} disabled={disabled}/>
                    <Input value={user.email} type={"url"} label={"Website"} id={"8"} disabled={disabled}/>
                    <Input value={""} type={"textarea"} label={"Comment"} id={"9"} disabled={disabled}/>
                </div>
                <Button success disabled={disabled}>Отправить</Button>
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