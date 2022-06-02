import React, { useState } from "react";
import Prompt from "./components/Prompt";
import MessageList from "./components/MessageList";
import Logo from "./components/Logo";
import "./Style/main.css";

const App = () => {
  //initializing state
  const [response, setResponse] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //sending request to api
  const sendMessageToOpenAI = (message) => {
    setLoading(true);
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
        if (data) {
          console.dir(data);
          //phandling response and storeing it with spred operator
          setResponse(
            response.push({
              id: data.id,
              receivedMessage: data.choices[0].text,
              sentMessage: message,
            })
          );
          // reversing the stored values
          setResponse(response.reverse());
          setLoading(false);
          // console.log(response);
        }
      });
  };
  //displaying components
  return (
    <div className="container">
      <Logo />
      <Prompt showLoading={isLoading} onMessageSent={sendMessageToOpenAI} />
      {response.length > 0 ? <MessageList messages={response} /> : null}
    </div>
  );
};
export default App;
