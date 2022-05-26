import React from "react";
import "../Style/messagecardStyle.css";
//compopnent for displaying particukar message
const MessageCard = ({ message }) => {
  return (
    <div className="message-card">
      <div className="details">
        <span>Sent message:</span>
        <p>{message.sentMessage}</p>
      </div>
      <div className="details">
        <span>Received message:</span>
        <p>{message.receivedMessage}</p>
      </div>
    </div>
  );
};
export default MessageCard;
