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
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { getAuthUserData } from "./redux/auth-reducer";
import {initializeApp} from '../src/redux/app-reducer'
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if(!this.props.initialized) {
      return <Preloader/>
    } 
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
  
          <div className="app-wrapper-content">
            
              <Route path="/dialogs/" render={()=><DialogsContainer/>} />
              <Route path="/profile/:userId?/" render={()=><ProfileContainer/>} />
              <Route path="/users" render={()=><UsersContainer/>}/>
  
              <Route path="/login" render={()=><Login/>}/>
  
              <Route path="/news" render={()=><News />} />
              <Route path="/music" render={()=><Music />} />
              <Route path="/settings" render={()=><Settings />} />
            
          </div>
        </div>
      </BrowserRouter>
    );
  }
  
};

// const App = (props) => {
//   return (
//     <BrowserRouter>
//       <div className="app-wrapper">
//         <HeaderContainer />
//         <Navbar />

//         <div className="app-wrapper-content">
          
//             <Route path="/dialogs/" render={()=><DialogsContainer/>} />
//             <Route path="/profile/:userId?/" render={()=><ProfileContainer/>} />
//             <Route path="/users" render={()=><UsersContainer/>}/>

//             <Route path="/login" render={()=><Login/>}/>

//             <Route path="/news" render={()=><News />} />
//             <Route path="/music" render={()=><Music />} />
//             <Route path="/settings" render={()=><Settings />} />
          
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };
const mapStateToProps = (state) => ({
  initialized:state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp,getAuthUserData})(App);
