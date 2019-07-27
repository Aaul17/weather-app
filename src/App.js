import React from 'react';
import logo from './logo.svg';
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
    }, () => console.log(this.state.lat))
  }

  getCurrentLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.geoSuccess);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  componentDidMount() {
    this.getCurrentLocation();
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >
      Learn React
      </a>
      </header>
      </div>
    );
  }
}

export default App;
