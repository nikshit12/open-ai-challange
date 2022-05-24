import React from "react";
import MessageCard from "./MessageCard";

class MessageList extends React.Component {
  render() {
    const messageList = this.props.messages.map((message) => {
      return <MessageCard key={message.id} message={message} />;
    });
    return <div>{messageList}</div>;
  }
}
export default MessageList;
