import React from 'react';
import classes from "./Sidebar.module.scss";
import Button from "../Button/Button";

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            Сортировка
            <Button>По городу</Button>
            <Button>По компании</Button>
        </div>
    );
};

export default Sidebar;