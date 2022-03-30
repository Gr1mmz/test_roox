import React, {Dispatch, SetStateAction, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {IUser} from "../../../types/types";
import classes from "./Card.module.scss";

interface CardProps {
    user: IUser;
    setUser: Dispatch<SetStateAction<IUser | null>>
}

const Card: React.FC<CardProps> = ({user, setUser}) => {
    const navigate = useNavigate();
    const onUserClickHandler = useCallback((e: React.SyntheticEvent) => {
        e.preventDefault();
        setUser(user);
        navigate("user");
    }, [navigate, setUser, user])
    return (
        <div className={classes.card}>
            <div className={classes.info}>
                <div className={classes.name}>
                    <span>ФИО: </span>
                    {user.name}
                </div>
                <div className={classes.address}>
                    <span>Город: </span>
                    {user.address.city}
                </div>
                <div className={classes.company}>
                    <span>Компания: </span>
                    {user.company.name}
                </div>
            </div>
            <a
                href="/user"
                className={classes.link}
                onClick={(e: React.SyntheticEvent) => onUserClickHandler(e)}
            >
                Подробнее
            </a>
        </div>
    );
};

export default Card;