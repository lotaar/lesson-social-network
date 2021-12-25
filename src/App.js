import React from "react";

import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/Users Container";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          
            <Route path="/dialogs/" render={()=><DialogsContainer/>} />
            <Route path="/profile/:userId?/" render={()=><ProfileContainer/>} />
            <Route path="/users" render={()=><UsersContainer/>}/>

            <Route path="/news" render={()=><News />} />
            <Route path="/music" render={()=><Music />} />
            <Route path="/settings" render={()=><Settings />} />
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
