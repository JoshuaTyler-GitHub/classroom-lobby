// node_modules
import React from "react";

// constants
const CLOCK_CLASSNAME = "align-items-center bg-light border d-flex flex-column justify-content-center m-3 p-3 rounded";

class CountdownClock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }


  render() {
    const { props, state } = this;
    const { classTime } = props;
    const { date } = state;

    return(
      <div className="align-items-center col-12 d-flex flex-column mt-5">

        {/* Current Time */}
        <div
          className={CLOCK_CLASSNAME}
          style={{ maxWidth: "20rem" }}
        >
          <h2 className="text-primary">{"Current time is:"}</h2>
          <h3>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</h3>
        </div>

        {/* Class Time */}
        <div
          className={CLOCK_CLASSNAME}
          style={{ maxWidth: "20rem" }}
        >
          <h2 className="text-primary">{"Class begins at:"}</h2>
          <h3>{classTime}</h3>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), Number("1000"));
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }
}
export default CountdownClock;
