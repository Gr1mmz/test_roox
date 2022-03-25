import React from 'react';
import classes from "./Main.module.scss";

interface MainProps {
    children: React.ReactNode | React.ReactChild,
}

const Main = ({children}: MainProps) => {
    return (
        <div className={classes.main}>
            {children}
        </div>
    );
};

export default Main;