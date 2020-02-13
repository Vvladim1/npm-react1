import React from "react";
import MyPsts from "./MyPosts/MyPosts";
import Profile from "./profile/Profile";

const Content = props => {
  
  return (
    <div>
      <Profile />
      <MyPsts
        state={props.state}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Content;
