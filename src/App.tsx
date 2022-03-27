import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {IUser} from "./types/types";
import { getUsers } from "./API/API";
import MainLayout from "./components/MainLayout/MainLayout";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Users from "./components/Users/Users";
import User from "./components/User/User";
import "./styles/App.scss";

const App: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [user, setUser] = useState<IUser | null>(null);
    useEffect(() => {
        getUsers().then((response) => setUsers(response.data));
    }, []);

  return (
    <BrowserRouter>
        <div className="App">
            <MainLayout>
                <Sidebar/>
                <Main>
                    <Routes>
                        <Route path="/" element={<Users users={users} setUser={setUser}/>} />
                        <Route path="/user" element={<User user={user}/>} />
                    </Routes>
                </Main>
            </MainLayout>
        </div>
    </BrowserRouter>
  );
}

export default App;
