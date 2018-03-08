import 'react-dates/initialize';
import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import DayPicker, { DateUtils } from 'react-day-picker';
import style from './style.css';
import RestaurantDisplay from './display.jsx';
import TimeSelect from './timeselect.jsx';
import People from './people.jsx';
import DayPickerInput from 'react-day-picker/DayPickerInput';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queried: false,
      people: null,
      date: null,
      time: null,
      restaurantName: '',
    };
  }

  componentDidMount() {
    this.setState({
      people: 1,
      date: null,
      time: '12:00 AM',
    });
  }

  findTable() {
    const app = this;

    axios({
      method: 'post',
      url: 'http://localhost:7000/',
      data: {
        people: this.state.people,
        date: this.state.date,
        time: this.state.time,
        restaurantName: this.state.restaurantName,
      },
    }).then((response) => {
      app.setState({ queried: true });
      console.log(response);
      console.log(app.state);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
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
    );
  }
}

class RestaurantSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }

  componentDidMount() {
    const props = this.props;
  }

  handleDayClick(day, { selected }) {
    console.log('clicked');
    this.props.appState.date = day;
    console.log(this.props.appState);

    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  render() {
    return (

    // <div className="content-block-body no-padding-top">
      <div className="buttonsContainer" >
         
            <People appStatePassed={this.props.appState} />
<div className="toLeft">
        <div className="calendar">
          <DayPickerInput
            className="Selectable"
            placeholder={
              (new Date()).getFullYear().toString() + '-' + 
              (new Date()).getMonth().toString() + '-' + (new Date()).getDate().toString()}
            selectedDays={this.state.selectedDay}
            onDayChange={this.handleDayClick}
          />
        </div>

          <div className="time-picker dtp-picker-selector select-native unselected-on-init">
            <a className="select-label dtp-picker-selector-link aClass" tabIndex="-1" />
            <TimeSelect appStatePassed={this.props.appState} />
          </div>

          <input
            glyph="glyphicon glyphicon-search"
            type="text"
            className="searchBox glyphicon glyphicon-search"
            title="Location, Restaurant, or Cuisine"
            placeholder="Location, Restaurant, or Cuisine"
            onChange={(e) => {
this.props.appState.restaurantName = e.target.value;
  }}
          />
          <div
            onClick={this.props.qFn}
            className="submit"
            value="Find a Table"
            className="TableSearch"
          >Find a Table
          </div>
</div>
        <a className="view-all-link" href="//www.opentable.com/san-francisco-bay-area-restaurant-listings">View all 8404 restaurants in San Francisco</a>
        {(this.props.appStateQueried) ? <RestaurantDisplay appState={this.props.appState} /> : <div />}
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
window.App = App;
