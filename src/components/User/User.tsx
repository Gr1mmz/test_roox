import React from 'react';
import Button from '../Button/Button';
import classes from "./User.module.scss";
import Input from "../Input/Input";

const User: React.FC = () => {
    return (
        <div className={classes.user}>
            <div className={classes.header}>
                <h2>Профиль пользователя</h2>
                <Button>Редактировать</Button>
            </div>
            <div className={classes.info}>
                <Input value={"Иван Иванов"} type={"text"} label={"Имя"} id={"1"} disabled/>
                <Input value={"Ivan"} type={"text"} label={"User name"} id={"2"} disabled/>
                <Input value={"example@mail.com"} type={"email"} label={"E-mail"} id={"3"} disabled/>
                <Input value={"ул. Пример"} type={"text"} label={"Street"} id={"4"} disabled/>
                <Input value={"Москва"} type={"text"} label={"City"} id={"5"} disabled/>
                <Input value={"1234234"} type={"number"} label={"Zip code"} id={"6"} disabled/>
                <Input value={"89991112233"} type={"tel"} label={"Phone"} id={"7"} disabled/>
                <Input value={"www.example.com"} type={"url"} label={"Website"} id={"8"} disabled/>
                <Input value={""} type={"textarea"} label={"Comment"} id={"9"} disabled/>
            </div>
            <Button success disabled>Отправить</Button>
        </div>
    );
};

export default User;