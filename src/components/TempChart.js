import React from 'react';

const TempChart = (props) => {
  return (
    <>
      <br />
      <ul className="chart">
        <li className="axis">
          <div className="label">{props.maxTemp}</div>
          <div className="label">{props.minTemp}</div>
        </li>
        <li className="bar">
          <div className="percent">
          {props.temp}
          </div>
        </li>
      </ul>
    </>
  )
}

export default TempChart
