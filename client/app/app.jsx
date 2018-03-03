import React from 'react';
import {render} from 'react-dom';
import style from './style.css';
import 'react-dates/initialize';
import axios from 'axios';
import 'react-dates/initialize';
import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// import dateStyles from './react_dates_overrides.css';
// import calendar from './calendar.jsx'

class App extends React.Component {
  constructor(props) {
  super(props);

this.state = {

};

this.findTable = this.findTable.bind(this);
}

findTable() {
  //this function is supposed to query your own database

 axios.get('/')
 .then(function (response) {
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
    <RestaurantSearch clicker={this.findTable}/>
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
  
    <select name="Select_1" tabIndex="1">    <option value="1">1 person</option>    
    <option value="2">2 people</option>    <option value="3">3 people</option>    
    <option value="4">4 people</option>    <option value="5">5 people</option>    
    <option value="6">6 people</option>    <option value="7">7 people</option>    
    <option value="8">8 people</option>    <option value="9">9 people</option>    
    <option value="10">10 people</option>    <option value="11">11 people</option>    
    <option value="12">12 people</option>    <option value="13">13 people</option>    
    <option value="14">14 people</option>    <option value="15">15 people</option>    
    <option value="16">16 people</option>    <option value="17">17 people</option>   
     <option value="18">18 people</option>    <option value="19">19 people</option>    
     <option value="20">20 people</option>    <option value="21">Larger party</option>  
     </select>
    </div>
    
    <DayPicker />
    
    <div className="time-picker dtp-picker-selector select-native unselected-on-init">  
  <a className="select-label dtp-picker-selector-link" tabIndex="-1"></a>  
  <select name="Select_0" tabIndex="3">    <option value="00:00">12:00 AM</option>    
  <option value="00:30">12:30 AM</option>    <option value="01:00">1:00 AM</option>    
  <option value="01:30">1:30 AM</option>    <option value="02:00">2:00 AM</option>    
  <option value="02:30">2:30 AM</option>    <option value="03:00">3:00 AM</option>   
   <option value="03:30">3:30 AM</option>    <option value="04:00">4:00 AM</option>    
   <option value="04:30">4:30 AM</option>    <option value="05:00">5:00 AM</option>   
    <option value="05:30">5:30 AM</option>    <option value="06:00">6:00 AM</option>   
     <option value="06:30">6:30 AM</option>    <option value="07:00">7:00 AM</option>   
      <option value="07:30">7:30 AM</option>    <option value="08:00">8:00 AM</option>   
       <option value="08:30">8:30 AM</option>    <option value="09:00">9:00 AM</option>   
        <option value="09:30">9:30 AM</option>    <option value="10:00">10:00 AM</option>   
         <option value="10:30">10:30 AM</option>    <option value="11:00">11:00 AM</option>   
          <option value="11:30">11:30 AM</option>    <option value="12:00">12:00 PM</option>    
          <option value="12:30">12:30 PM</option>    <option value="13:00">1:00 PM</option>    
          <option value="13:30">1:30 PM</option>    <option value="14:00">2:00 PM</option>    
          <option value="14:30">2:30 PM</option>    <option value="15:00">3:00 PM</option>    
          <option value="15:30">3:30 PM</option>    <option value="16:00">4:00 PM</option>   
           <option value="16:30">4:30 PM</option>    <option value="17:00">5:00 PM</option>    
           <option value="17:30">5:30 PM</option>    <option value="18:00">6:00 PM</option>    
           <option value="18:30">6:30 PM</option>    <option value="19:00">7:00 PM</option>    
           <option value="19:30">7:30 PM</option>    <option value="20:00">8:00 PM</option>    
           <option value="20:30">8:30 PM</option>    <option value="21:00">9:00 PM</option>    
           <option value="21:30">9:30 PM</option>    <option value="22:00">10:00 PM</option>    
           <option value="22:30">10:30 PM</option>    <option value="23:00">11:00 PM</option>    
           <option value="23:30">11:30 PM</option>  
           </select>
           </div> 

  <input type="text" className="searchBox" title="Location, Restaurant, or Cuisine" 
  placeholder="Location, Restaurant, or Cuisine"
  ></input>

  <input type="Submit" value="Find a Table" className="TableSearch" onClick={this.props.clicker}></input>


  </form>
 

  <a className="view-all-link" href="//www.opentable.com/san-francisco-bay-area-restaurant-listings">View all 8404 restaurants in San Francisco</a>
  </div>
  );
 }
}

render(<App/>, document.getElementById('app'));