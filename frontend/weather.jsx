import React from "react";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = { weather: "" };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.pollWeather.bind(this));
  }

  pollWeather(location) {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    let url = "http://api.openweathermap.org/data/2.5/weather?";
    const apiKey = "96cd5bdb955ef60254ad9808fcb5e691";
    url = url + `lat=${latitude}` + `&lon=${longitude}` + `&APPID=${apiKey}`;
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({weather: data});
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }

  render() {
    let content = <div></div>;
    if (this.state.weather) {
      let location = this.state.weather.name;
      let temperature = (this.state.weather.main.temp * 9 / 5) - 459.67;
      content = <div>
                  <h1>{location}</h1>
                  <h1>{temperature.toFixed(2)} deg</h1>
                </div>;
    } else {
      content = <div className="loading">Fetching weather data...</div>;
    }

    return (
    <div className="weatherWidget">
      <h1>Weather</h1>
      <div className="weather">{content}</div>
    </div>
    );
  }
}

export default Weather;
