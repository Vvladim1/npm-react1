import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Profile from "./profile/Profile";

const Content = props => {
  
  return (
    <div>
      <Profile />
      <MyPosts
        state={props.state}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Content;
