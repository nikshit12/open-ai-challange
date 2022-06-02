import React, { useState } from "react";
import "../Style/promptStyle.css";

const Prompt = ({ onMessageSent, showLoading }) => {
  const [message, setMessage] = useState(""); //Initializing state for message
  // sending message to parent for using it in api request
  const sendPrompt = (e) => {
    e.preventDefault();
    //Sending message to App
    if (message.trim().length > 0) {
      const message = e.target[0].value;
      onMessageSent(message);
      setMessage("");
    } else {
      alert("Please write some message..");
    }
  };
  // seeting messagevalue on input changes
  const setMessageText = (e) => {
    //setting message
    setMessage(e.target.value);
  };
  return (
    <section className="prompt-container pb-15">
      {/* form start  */}
      {!showLoading ? (
        <form className="prompt-form" onSubmit={sendPrompt}>
          <div className="field">
            <label>Enter message</label>
            <textarea
              rows="15"
              cols="45"
              value={message}
              onChange={setMessageText}
            ></textarea>
          </div>
          <button type="submit">send</button>
        </form>
      ) : (
        <div className="loader">SHopify is awsome and we are fetching data</div>
      )}
      {/* form end  */}
    </section>
  );
};

export default Prompt;
