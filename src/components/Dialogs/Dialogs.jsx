import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./dialog/dialogItem";
import Message from "./mesage/message";
import {
  updateNewMessageTextCreator,
  sendMessageCreator
} from "../redux/dialogs-reducer";

const Dialogs = props => {
  let dialogsElement = props.state.dialogs.map(data => (
    <DialogItem name={data.name} id={data.id} />
  ));
  let messagesElements = props.state.messages.map(datas => (
    <Message message={datas.message} />
  ));

  let onMBodyChange = () => {};

  let newMessageBody = props.state.newMessageBody;
  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = e => {
    let body = e.target.value;
    props.dispatch(updateNewMessageTextCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElement}</div>
      <div>
        <div className={s.messages_items}>{messagesElements}</div>
        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={newMessageBody}
              placeholder="send yor message"
            />
          </div>
          <button onClick={onSendMessageClick}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
