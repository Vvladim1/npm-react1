import React from "react";
import {
  updateNewMessageTextCreator,
  sendMessageCreator
} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = props => {

  let state = props.store.getState().dialogsPage;
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = body => {
    // let body = e.target.value;
    props.store.dispatch(updateNewMessageTextCreator(body));
  };

  return (
    <Dialogs state={state}
             onSendMessageClick={onSendMessageClick}
             onNewMessageChange={onNewMessageChange} />
  );
};

export default DialogsContainer;
