import React from 'react';
import classes from "./Card.module.scss";
import {Link} from "react-router-dom";

interface CardProps {
    name: string,
    address: string,
    company: string
}

const Card = ({name, address, company}: CardProps) => {
    return (
        <div className={classes.card}>
            <div className={classes.info}>
                <div className={classes.name}>
                    <span>ФИО: </span>
                    {name}
                </div>
                <div className={classes.address}>
                    <span>Город: </span>
                    {address}
                </div>
                <div className={classes.company}>
                    <span>Компания: </span>
                    {company}
                </div>
            </div>
            <Link className={classes.link} to="/user">Подробнее</Link>
        </div>
    );
};

export default Card;