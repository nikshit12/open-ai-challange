import React from "react";
import MessageCard from "./MessageCard";

class MessageList extends React.Component {
  state = { isLoading: true };
  componentDidMount() {
    this.setState({ isLoading: false });
    console.log(this);
  }
  //helper function for showing message list
  showList = () => {
    const messageList = this.props.messages.map((message) => {
      return <MessageCard key={message.id} message={message} />;
    });
    return <div>{messageList}</div>;
  };
  // TODO
  //implementing logic for loading screen
  showLoading = () => {
    return (
      <div>
        <h1>loading data</h1>
      </div>
    );
  };
  //render method
  render() {
    return this.showList();
  }
}
export default MessageList;
