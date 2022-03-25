import React from 'react';
import classes from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            Сортировка
            <button className={classes.button}>По городу</button>
            <button className={classes.button}>По компании</button>
        </div>
    );
};

export default Sidebar;