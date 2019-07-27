import React from 'react';

const HumidityChart = (props) => {
  return (
    <>
      <br />
      <ul className="chart">
      <li className="axis">
        <div className="label">100%</div>
        <div className="label">80%</div>
        <div className="label">60%</div>
        <div className="label">40%</div>
        <div className="label">20%</div>
      </li>
      <li className="bar" style={{height: `${props.humidity}%`}}>
        <div className="percent">
        {props.humidity}<span>%</span>
        </div>
      </li>
      </ul>
    </>
  )
}

export default HumidityChart
