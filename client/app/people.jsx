import React from 'react';
import _ from 'underscore';

export default class People extends React.Component {
constructor(props){
    super(props);
    this.state = {
        selectedValue: ''
    }
}   

handleChange(e) {
    this.props.appStatePassed.people = e.target.value
 
    console.log('app state from people', this.props.appStatePassed)
}

render(){ 
var peopleArray = ['1 person'];

var populateArray = function() {
for(let i = 2; i < 21; i++) {
    peopleArray.push(i.toString() + ' people');
}

peopleArray.push('Larger Party');
}

populateArray();

    return (
<select name="Select_0" value={this.state.selectValue} 
onChange={this.handleChange.bind(this)} > 
{peopleArray.map((opt) => {
return <option value={opt} key={opt}>{opt}</option>
})}
</select>
    )        
}
}
