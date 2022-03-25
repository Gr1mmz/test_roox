import React from 'react';
import './styles/App.scss';
import MainLayout from "./components/MainLayout/MainLayout";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from './components/Main/Main';
import Users from "./components/Users/Users";
import User from "./components/User/User";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <MainLayout>
                <Sidebar/>
                <Main>
                    <Routes>
                        {/*
                        <Route path="/" element={<Home/>} />
                        <Route path="/popular/*" element={<Popular />} />*/}
                        <Route path="/" element={<Users/>} />
                        <Route path="/user" element={<User/>} />
                    </Routes>
                </Main>
            </MainLayout>
        </div>
    </BrowserRouter>
  );
}

export default App;
