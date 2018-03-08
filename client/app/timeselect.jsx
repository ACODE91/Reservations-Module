import React from 'react';
import _ from 'underscore';

export default class TimeSelect extends React.Component {
constructor(props){
    super(props);
    this.state = {
        selectedValue: ''
    }
}   

handleChange(e) {
    this.props.appStatePassed.time = e.target.value
 
    // console.log('app state, changed by time select', this.props.appStatePassed)
}

render(){ 
    const timesArray = ['12:00 AM', '12:30 AM'];

const populateTimesData = function () {
  for (let i = 1; i < 12; i++) {
    timesArray.push(`${i.toString()}:00 AM`);
    timesArray.push(`${i.toString()}:30 AM`);
  }

  timesArray.push('12:00 PM', '12:30 PM');

  for (let i = 1; i < 12; i++) {
    timesArray.push(`${i.toString()}:00 PM`);
    timesArray.push(`${i.toString()}:30 PM`);
  }
};

populateTimesData();

    return (
<select className="Select_0 timeSelect" tabIndex="3" value={this.state.selectValue}
onChange={this.handleChange.bind(this)}> 
{timesArray.map((opt) => {
return <option key={opt} value={opt}>{opt}</option>
})}
</select>
    )        
}
}
