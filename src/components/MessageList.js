import React from "react";
import MessageCard from "./MessageCard";

const MessageList = ({ messages }) => {
  console.dir(messages);
  //helper function for showing message list
  const showList = () => {
    const messageList = messages.map((message) => {
      return <MessageCard key={message.id} message={message} />;
    });
    return <div>{messageList}</div>;
  };
  //render method
  return <div>{showList()}</div>;
  // return <div>message</div>;
};
export default MessageList;
