import React, {Component} from 'react';

class SearchArea extends Component {
  state = {
    params: null,
    setCity: "",
    setLat: "",
    setLong: ""
  }

  changeParams = (btn) => {
      if (btn === "city") {
        this.setState({
          params: "city"
        });
      } else if (btn === "coord") {
        this.setState({
          params: "coord"
        });
      }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  searchCity = (event) => {
    event.preventDefault();
    this.props.fetchWeatherByCity(this.state.setCity);
  }

  searchCoords = (event) => {
    event.preventDefault();
    this.props.fetchWeatherByCoords(this.state.setLat, this.state.setLong);
  }

  render() {
    return (
      <div className="search-area">
        <button className="city-btn" onClick={event => this.changeParams("city")}>City</button> <button className="coord-btn" onClick={event => this.changeParams("coord")}>Coordinates</button>
        <div className="search-box">
        <br />
          {
            this.state.params ? (
              this.state.params === "city" ?
              <form onSubmit={event => this.searchCity(event)}>
                City Name:
                <br />
                <input type="text" name="setCity" placeholder="City..." value={this.state.setCity} onChange={this.handleChange}></input>
                <br />
                <input type="submit" value="Search"/>
              </form>
                :
              <form onSubmit={event => this.searchCoords(event)}>
                Latitude:
                <br />
                <input type="text" name="setLat" placeholder="0" value={this.state.setLat} onChange={this.handleChange}></input>
                <br />
                Longitude:
                <br />
                <input type="text" name="setLong" placeholder="0" value={this.state.setLong} onChange={this.handleChange}></input>
                <br />
                <br />
                <input type="submit" value="Search"/>
              </form>
            ) :
            null
          }
        </div>
      </div>
    )
  }
}

export default SearchArea;
