import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {IUser} from "./types/types";
import {getUsers} from "./API/API";
import MainLayout from "./components/Layout/MainLayout/MainLayout";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import Main from "./components/Layout/Main/Main";
import Users from "./components/Pages/Users/Users";
import User from "./components/Pages/User/User";
import "./styles/App.scss";

const App: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [user, setUser] = useState<IUser | null>(null);
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        getUsers().then((data) => setUsers(data));
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <MainLayout>
                    <Sidebar setFilter={setFilter}/>
                    <Main>
                        <Routes>
                            <Route path="/" element={<Users users={users} setUser={setUser} filter={filter}/>}/>
                            <Route path="/user" element={<User user={user}/>}/>
                        </Routes>
                    </Main>
                </MainLayout>
            </div>
        </BrowserRouter>
    );
}

export default App;
