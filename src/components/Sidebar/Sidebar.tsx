import React from "react";
import Button from "../Button/Button";
import classes from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
    return (
        <div className={classes.sidebar}>
            Сортировка
            <Button>По городу</Button>
            <Button>По компании</Button>
        </div>
    );
};

export default Sidebar;