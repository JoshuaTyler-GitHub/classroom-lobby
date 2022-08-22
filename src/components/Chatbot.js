import React from "react";
import { w3cwebsocket } from "websocket";

class ChatBot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
      websocket: null,
      websocketError: "",
    };
  }


  render() {
    const { state } = this;
    const { websocketError } = state;

    return(
      <div className="align-items-center col-12 d-flex flex-column mt-5">
        <h3>{"Hello I am websocket"}</h3>
        {websocketError && <div className="text-danger">{websocketError}</div>}
        <input type={"text"} onChange={(e) => this.setState({ inputText: e.target.value })}/>
        <button onClick={() => this.sendTextToWebSocket()}>
          {"submit"}
        </button>
      </div>
    );
  }

  componentDidMount() {
    this.connectToWebSocket();
  }

  componentWillUnmount() {
    this.disconnectFromWebsocket();
  }

  connectToWebSocket() {
    const { props } = this;
    const { wsConnection } = props;

    // Creates new WebSocket object with a ws URI as the parameter
      const websocket = new w3cwebsocket(wsConnection);
      this.setState({ websocket });
      this.handleBindWebSocketEvents(websocket);


  }

  disconnectFromWebsocket() {
    const { state } = this;
    const { websocket } = state;
    if(websocket) {
      console.log(websocket);
      websocket.close();
      console.log("Connection closed.");
    }

  }

  handleBindWebSocketEvents(websocket) {
        // Fired when a connection with a WebSocket is opened
        websocket.onopen = () => {
          console.log("Connection opened.");
        };
    
        // Fired when data is received through a WebSocket
        websocket.onmessage = (event) => {
          const { data } = event;
          console.log("Connection received message:", data);
        };
    
        // Fired when a connection with a WebSocket is closed
        websocket.onclose = () => {
          this.disconnectFromWebsocket();
        };
    
        // Fired when a connection with a WebSocket has been closed because of an error
        websocket.onerror = (event) => {
          console.log("Connection closed due to error:", event);
          this.setState({ websocketError: "Sorry this is not working right now." });
        };
  }

  sendTextToWebSocket() {
    const { state } = this;
    const { inputText, websocket } = state;
    websocket.send(JSON.stringify(inputText));
  }
}
export default ChatBot
