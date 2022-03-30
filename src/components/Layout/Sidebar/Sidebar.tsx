import React, {Dispatch, SetStateAction, useCallback} from "react";
import Button from "../../UI/Button/Button";
import classes from "./Sidebar.module.scss";

interface SidebarProps {
    setFilter: Dispatch<SetStateAction<string>>
}

const Sidebar: React.FC<SidebarProps> = ({setFilter}) => {
    const setFilterHandler = useCallback((filter) => {
        setFilter(filter);
    }, [setFilter]);

    return (
        <div className={classes.sidebar}>
            Сортировка
            <Button onClick={() => setFilterHandler("city")}>По городу</Button>
            <Button onClick={() => setFilterHandler("company")}>По компании</Button>
        </div>
    );
};

export default Sidebar;