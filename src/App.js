import React from "react";
import Prompt from "./components/Prompt";
import MessageList from "./components/MessageList";
import Logo from "./components/Logo";
import "./Style/main.css";
class App extends React.Component {
  state = {
    resposne: [],
  };
  insertData = (data) => {
    this.setState({ response: this.state.response.push(data) });
  };
  sendMessageToOpenAI = (message) => {
    const data = {
      prompt: message,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ showLoading: true });
        if (data) {
          this.setState({
            resposne: [
              ...this.state.resposne,
              {
                id: data.id,
                receivedMessage: data.choices[0].text,
                sentMessage: message,
              },
            ],
          });
          this.setState({ resposne: this.state.resposne.reverse() });
          // console.dir(this.state.resposne);
        }
        this.setState({ showLoading: false });
      });
  };
  storeInLocalStorage = () => {
    localStorage.setItem("data", "ahghg");
    console.dir(localStorage.data);
  };
  localStorageData = () => {
    if (this.state.resposne.length > 0) {
      return (
        <button onClick={this.storeInLocalStorage}>
          Save on local storage
        </button>
      );
    } else {
      return null;
    }
  };
  getFromLocalStorage = () => {
    console.dir(this.localStorageData.data);
  };
  renderLoadingScreen = () => {
    if (this.state.showLoading) {
      return <div className="loadingscreen">loadning</div>;
    } else {
      return null;
    }
  };
  render() {
    return (
      <div className="container">
        <Logo />
        <Prompt onMessageSent={this.sendMessageToOpenAI} />
        <MessageList messages={this.state.resposne} />
        {/* {this.localStorageData()} */}
        {this.renderLoadingScreen}
      </div>
    );
  }
}
export default App;
