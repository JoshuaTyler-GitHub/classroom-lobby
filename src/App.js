// node_modules
import React from "react";

// components
import CountdownClock from "./components/CountdownClock.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";

// styles
import "./bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appVersion: 'I dont know',
    };
  }

  render() {
    const { state } = this
    const { appVersion } = state;

    return (
      <div className="container" style={{ maxWidth: "500px"}}>
        <div className="row">
          
          {/* Header */}
          <Header>
            <h1 className="text-light">{"UI Fundamentals"}</h1>
          </Header>

          {/* Countdown Clock */}
          <CountdownClock classTime={"17:00:00"}/>

          {/* Footer */}
          <Footer>
            <div>{"hello, I am a <div>"}</div>
          </Footer>

        </div>
      </div>
    );
  }
}
export default App;
