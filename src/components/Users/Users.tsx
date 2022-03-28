import React, {Dispatch, SetStateAction} from "react";
import {IUser} from "../../types/types";
import Card from "../Card/Card";
import classes from "./Users.module.scss";

interface UsersProps {
    users: IUser[],
    setUser: Dispatch<SetStateAction<IUser | null>>,
    filter: string
}

const Users: React.FC<UsersProps> = ({users, setUser, filter}) => {
    let filterUsers: IUser[] = Object.assign([], users);
    function sortUsers(type: string) {
        switch (type) {
            case "city":
                filterUsers = filterUsers.sort((a, b) => {
                    return a.address.city.localeCompare(b.address.city);
                });
                break;
            case "company":
                filterUsers = filterUsers.sort((a, b) => {
                    return a.company.name.localeCompare(b.company.name);
                });
                break;
            default:
                return filterUsers;
        }
    }
    sortUsers(filter);
    const usersCards = filterUsers.map(user => (<Card user={user} key={user.id} setUser={setUser} />));

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