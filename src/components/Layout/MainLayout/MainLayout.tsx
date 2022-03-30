import React from "react";
import classes from "./MainLayout.module.scss";

const MainLayout: React.FC = ({children}) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    );
};

export default MainLayout;