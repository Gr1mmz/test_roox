import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {BeatLoader} from "react-spinners";
import {css} from "@emotion/react"
import {IUser} from "../../../types/types";
import Card from "../../UI/Card/Card";
import classes from "./Users.module.scss";

interface UsersProps {
    users: IUser[],
    setUser: Dispatch<SetStateAction<IUser | null>>,
    filter: string
}

const spinner = css`
    display: block;
    margin: 0 auto;
`;

const Users: React.FC<UsersProps> = ({users, setUser, filter}) => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (users.length > 0) {
            setLoading(false);
        }
    });

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
    const usersCards = filterUsers.map(user => (<Card user={user} key={user.id} setUser={setUser}/>));

    return (
        <>
            <h2>Список пользователей</h2>
            <div className={classes.cards}>
                {loading ? <BeatLoader color={"#4B51EF"} css={spinner} size={10}/> : usersCards}
            </div>
            <div className={classes.info}>Найдено {users.length} пользователей</div>
        </>
    );
};

export default Users;