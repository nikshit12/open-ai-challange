import React from "react";
import MessageCard from "./MessageCard";

class MessageList extends React.Component {
  state = { isLoading: true };
  componentDidMount() {
    this.setState({ isLoading: false });
  }
  showList = () => {
    const messageList = this.props.messages.map((message) => {
      return <MessageCard key={message.id} message={message} />;
    });
    return <div>{messageList}</div>;
  };
  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <h1>loading data</h1>
        </div>
      );
    } else {
      this.showList();
    }
  }
}
export default MessageList;
