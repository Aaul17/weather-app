import React from 'react';
import SearchArea from './components/SearchArea';
import './App.css';

class App extends React.Component {
  state = {
    city: "",
    temp: null,
    pressure: null,
    humidity: null,
    minTemp: null,
    maxTemp: null,
    desc: "",
    lat: null,
    long: null
  }

  geoSuccess = (position) => {
    this.setState({
      lat: position.coords.latitude,
      long: position.coords.longitude
    }, () => {
      console.log(this.state.lat)
      console.log(this.state.long)
      fetch(`http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${this.state.lat}&lon=${this.state.long}&APPID=4798d2ba65a57a46587bfbd4af561989`)
      .then(response => response.json())
      .then(weatherData => {
        console.log(weatherData.name)
        this.setState({
          city: weatherData.name,
          temp: weatherData.main.temp,
          pressure: weatherData.main.pressure,
          humidity: weatherData.main.humidity,
          desc: weatherData.weather[0].main
        })
      })
    })
  }

  getCurrentLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.geoSuccess);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  fetchWeatherByCity = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&APPID=4798d2ba65a57a46587bfbd4af561989`)
    .then(response => response.json())
    .then(weatherData => {
      console.log(weatherData.name)
      this.setState({
        lat: weatherData.coord.lat,
        long: weatherData.coord.lon,
        city: weatherData.name,
        temp: weatherData.main.temp,
        pressure: weatherData.main.pressure,
        humidity: weatherData.main.humidity,
        desc: weatherData.weather[0].main
      })
    })
  }

  fetchWeatherByCoords = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${parseFloat(lat)}&lon=${parseFloat(long)}&APPID=4798d2ba65a57a46587bfbd4af561989`)
    .then(response => response.json())
    .then(weatherData => {
      console.log(weatherData.name)
      this.setState({
        lat: weatherData.coord.lat,
        long: weatherData.coord.lon,
        city: weatherData.name,
        temp: weatherData.main.temp,
        pressure: weatherData.main.pressure,
        humidity: weatherData.main.humidity,
        desc: weatherData.weather[0].main
      })
    })
  }

  componentDidMount() {
    this.getCurrentLocation();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MyWeather</h1>
        </header>
        <br />
        Search for your city:
        <br />
        <br />
        <SearchArea fetchWeatherByCity={this.fetchWeatherByCity} fetchWeatherByCoords={this.fetchWeatherByCoords}/>
        <div>
          <h3>{this.state.city}</h3>
          <h4>{this.state.temp}° F</h4>
          <p>{this.state.desc}</p>
          <br />
          <p>Humidity: {this.state.humidity}%</p>
          <p>Pressure: {this.state.pressure} hPa</p>
        </div>
      </div>
    );
  }
}

export default App;
