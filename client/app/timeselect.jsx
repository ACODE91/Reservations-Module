import React from 'react';
import _ from 'underscore';
import times from '../../data/timesData.js'

export default class TimeSelect extends React.Component {
constructor(props){
    super(props);
    this.state = {
        selectedValue: ''
    }
}   

handleChange(e) {
    this.props.appStatePassed.time = e.target.value
 
    console.log('app state, changed by time select', this.props.appStatePassed)
}

render(){ 
    return (
<select name="Select_0" tabIndex="3" value={this.state.selectValue}
onChange={this.handleChange.bind(this)}> 
{times.timesArray.map((opt) => {
return <option key={opt} value={opt}>{opt}</option>

})}
</select>
    )        
}
}
