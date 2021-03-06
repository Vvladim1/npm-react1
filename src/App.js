import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import Musik from "./components/musik/musik";
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/content/ProfileContainer";

const App = props => {
  // debugger;
  return (
    <div className="wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <DialogsContainer store={props.store} />}
          />
          <Route
            path="/profile/:userId?"
            render={() => (
              <ProfileContainer
                 
              />
            )}
          />
          <Route
            path="/user"
            render={() => (
              <UsersContainer/>
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/musik" component={Musik} />
          <Route path="/settings" component={Settings} />
        </div>
    </div>
  );
};

export default App;
