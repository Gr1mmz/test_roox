import React from 'react';
import Button from '../Button/Button';
import classes from "./User.module.scss";

const User = () => {
    return (
        <div className={classes.user}>
            <div className={classes.header}>
                <h2>Профиль пользователя</h2>
                <Button>Редактировать</Button>
            </div>
            <div className={classes.info}>
                <label htmlFor="name">
                    Имя
                    <input id="name" type="text"/>
                </label>
            </div>
            <Button>Отправить</Button>
        </div>
    );
};

export default User;