import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import Content from "./components/content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import Musik from "./components/musik/musik";
import News from "./components/news/news";
import Settings from "./components/settings/settings";

const App = props => {
  debugger;
  return (
    <div className="wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />}
          />
          <Route
            path="/content"
            render={() => (
              <Content
                state={props.state.profilePage}
                dispatch={props.dispatch} 
              />
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
