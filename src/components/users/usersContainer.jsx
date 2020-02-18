import React from "react";
import { followAC, unfolowAC, setUsersAC } from "../redux/users-reducer";
import Users from "./users";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },

    unfollow: (userId) => {
      dispatch(unfolowAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }
  }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
