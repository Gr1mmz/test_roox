import React, {Dispatch, SetStateAction} from 'react';
import Card from "../Card/Card";
import classes from "./Users.module.scss";
import {IUser} from "../../types/types";

interface UsersList {
    users: IUser[],
    setUser: Dispatch<SetStateAction<IUser | null>>
}

const Users: React.FC<UsersList> = ({users, setUser}) => {
    const usersCards = users.map(user => {
        return (
            <Card user={user} key={user.id} setUser={setUser} />
        )
    });

    return (
        <>
            <h2>Список пользователей</h2>
            <div className={classes.cards}>
                {usersCards}
            </div>
            <div className={classes.info}>Найдено {users.length} пользователей</div>
        </>
    );
};

export default Users;