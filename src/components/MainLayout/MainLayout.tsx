import React from 'react';
import classes from "./MainLayout.module.scss";

interface LayoutProps {
    children: React.ReactNode | React.ReactChild,
}

const MainLayout = ({children}: LayoutProps) => {
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    );
};

export default MainLayout;