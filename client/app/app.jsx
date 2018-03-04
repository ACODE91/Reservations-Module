import React from 'react';
import {render} from 'react-dom';
import style from './style.css';
import 'react-dates/initialize';
import axios from 'axios';
import 'react-dates/initialize';
import DayPicker from 'react-day-picker';
import RestaurantDisplay from './display.jsx';
import TimeSelect from './timeselect.jsx';
import People from './people.jsx';
import _ from 'underscore';
import datesArray from '../../data/datedata.js'
import times from '../../data/timesData.js'


// import 'react-day-picker/lib/style.css';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// import dateStyles from './react_dates_overrides.css';
// import calendar from './calendar.jsx'

class App extends React.Component {
  constructor(props) {
  super(props);

this.state = {
  queried: false,
  people: null,
  date: null,
  time: null,
  restaurantName: ''
};


}

findTable() {
  //this function is supposed to query your own database

//  axios.post('/')
//  .then(function (response) {
//   console.log(response);
//  }).catch(function (error) {
//   console.log(error);
//  });

 axios({
  method: 'post',
  url: '/',
  data: {
    people: this.state.people,
    date: this.state.date,
    time: this.state.time,
    restaurantName: this.state.restaurantName
  }
}).then(function (response) {
    console.log(response);
   }).catch(function (error) {
    console.log(error);
   });

}

  render () {
    return ( 
    <div className="content-block-header">
    <h1 className="page-header-title dtp-header">Peninsula Restaurants</h1>
    <h2 className="dtp-subheader">Make a free reservation</h2>

    <div id="oc-quick-action-link-container"><span className="oc-quick-action-quick-search">Quick Search:</span><span className="oc-quick-action-choice"> <a href="/s/interim?covers=2&amp;dateTime=2018-03-01%2013%3A30&amp;metroId=4&amp;regionIds=8" className="oc-quick-action-choice-link">Lunch tomorrow</a></span></div>
    <RestaurantSearch 
    qFn={this.findTable.bind(this)}
    appStateQueried={this.state.queried}
    appState={this.state}
    />
    </div>

    )}
}

class RestaurantSearch extends React.Component {
  constructor(props){
    super(props)
  }

 render(){

  return (
  
  <div className="content-block-body no-padding-top">

  <form className="pickerForm" id="dtp-search-single-box">
  <div className="party-size-picker dtp-picker-selector select-native unselected-on-init">

   <People appStatePassed={this.props.appState} />
    </div>

   <DayPicker appStatePassed={this.props.appState}/> 
    <div className="time-picker dtp-picker-selector select-native unselected-on-init">  
  <a className="select-label dtp-picker-selector-link" tabIndex="-1"></a>  
    <TimeSelect appStatePassed={this.props.appState}/>
    </div> 

  <input type="text" className="searchBox" title="Location, Restaurant, or Cuisine" 
  placeholder="Location, Restaurant, or Cuisine" onChange={(e) => {this.props.appState.restaurantName = e.target.value
  }}
  ></input>

  <div onClick={this.props.qFn} 
  className = 'submit' value="Find a Table" className="TableSearch" >Find a Table</div>

  </form>

  <a className="view-all-link" href="//www.opentable.com/san-francisco-bay-area-restaurant-listings">View all 8404 restaurants in San Francisco</a>
   {(this.props.appStateQueried) ? <RestaurantDisplay /> : <div></div>}
  </div>
  
  );
 }
}

render(<App/>, document.getElementById('app'));