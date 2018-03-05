import React from 'react';
import _ from 'underscore';

export default class RestaurantDisplay extends React.Component {
constructor(props){
    super(props);
}   
render(){ 
    return (
    <div className="rest-row-times-btn timeslot">{this.props.appState.time}</div>    
    )        
}
}

