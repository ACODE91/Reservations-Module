import React from 'react';

export default function RestaurantDisplay(props) {
  return (
    <div className="times">
      {/* <div className="rest-row-times-btn timeslot">{props.appState.time}</div>
      <div className="rest-row-times-btn timeslot">{props.appState.time}</div>
      <div className="rest-row-times-btn timeslot">{props.appState.time}</div> */}
      {
        props.appState.timesAvailable.map((time, index) => {
          if(time === props.appState.time) {
        return <div className="rest-row-times-btn timeslot" key={time}>{time}</div>
          } 
        })
      }
    </div>
  );
}

