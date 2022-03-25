import React from 'react';
import Card from "../Card/Card";
import classes from "./Users.module.scss";

const Users = () => {
    return (
        <div>
            <h2>Список пользователей</h2>
            <div className={classes.cards}>
                <Card name="Иван Иванов" address="Москва" company="ООО 'Пример'" />
            </div>
        </div>
    );
};

export default Users;