import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./profile/Profile";

const Content = props => {
  return (
    <div>
      <Profile profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Content;
