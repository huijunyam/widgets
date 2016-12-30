import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.handle = setInterval(this.incrementTime.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  incrementTime() {
    let currentSeconds = this.state.time.getSeconds();
    let newSeconds = this.state.time.setSeconds(currentSeconds + 1);
    let time = new Date(newSeconds);
    this.setState({time});
  }

  padding(time) {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }

  render() {
    let hours = this.state.time.getHours(),
        minutes = this.state.time.getMinutes(),
        seconds = this.state.time.getSeconds();

    return (
      <div className="clock-widget">
        <h1>Clock</h1>
        <div className="date">
          <h1>Date</h1>
          <h1>{this.state.time.toDateString()}</h1>
        </div>
        <div className="time">
          <h1>Time</h1>
          <h1>{`${this.padding(hours)}:${this.padding(minutes)}:${this.padding(seconds)}`}</h1>
        </div>
      </div>
    );
  }
}

export default Clock;
