import React, {Component} from 'react'

class SearchArea extends Component {
  state = {
    params: null
  }

  changeParams = (btn) => {
      if (btn === "city") {
        this.setState({
          params: "city"
        })
      } else if (btn === "coord") {
        this.setState({
          params: "coord"
        })
      }
  }

  render() {
    return (
      <div className="search-area">
        Search for your city:
        <br />
        <button className="city-btn" onClick={event => this.changeParams("city")}>City</button> <button className="coord-btn" onClick={event => this.changeParams("coord")}>Coordinates</button>
        <div className="search-box">
        <br />
          {
            this.state.params ? (
              this.state.params === "city" ?
              <input type="text" placeholder="City..."></input> :
              <>
                Latitude: <input type="text" placeholder="0"></input>
                <br />
                Longitude: <input type="text" placeholder="0"></input>
              </>
            ) :
            null
          }
        </div>
      </div>
    )
  }
}

export default SearchArea;
