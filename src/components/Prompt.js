import React from "react";
import "../Style/promptStyle.css";

class Prompt extends React.Component {
  state = { message: "" }; //Initializing state for message
  // sending message to parent for using it in api request
  sendPrompt = (e) => {
    e.preventDefault();
    //Sending message to App
    if (this.state.message.trim().length > 0) {
      const message = e.target[0].value;
      this.props.onMessageSent(message);
      this.setState({ message: "" });
    } else {
      alert("Please write some message..");
    }
  };
  // seeting messagevalue on input changes
  setMessage = (e) => {
    //setting message
    this.setState({ message: e.target.value });
  };
  // displaying prompt component
  render() {
    return (
      <section className="prompt-container pb-15">
        {/* form start  */}
        <form className="prompt-form" onSubmit={this.sendPrompt}>
          <div className="field">
            <label>Enter message</label>
            <textarea
              rows="15"
              cols="45"
              value={this.state.message}
              onChange={this.setMessage}
            ></textarea>
          </div>
          <button type="submit">send</button>
        </form>
        {/* form end  */}
      </section>
    );
  }
}

export default Prompt;
