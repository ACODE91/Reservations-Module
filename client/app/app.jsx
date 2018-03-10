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
      timesAvailable: [],
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
      url: 'http://localhost:6500/',
      data: {
        date: this.state.date,
      },
    }).then((response) => {
      console.log('response data', response.data);
      // app.state.timesAvailable = response.data;
      let timesArray = response.data;
      app.setState({queried: true, timesAvailable: timesArray});
      console.log(app.state)
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="content-block-header">
        <div className="dtp-subheader">Make a free reservation</div>
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
    var year = JSON.stringify(day).slice(1,5)
    var month = JSON.stringify(day).slice(6,8);
    var formatedDay = JSON.stringify(day).slice(9,11)

    if(formatedDay[0] === '0') {
      formatedDay = formatedDay.slice(1)
    }

    if(month[0] === '0'){
    this.props.appState.date = month[1] + '/' + formatedDay + '/' + year;
    } else if(month[0] !== '0'){
      this.props.appState.date = month + '/' + formatedDay + '/' + year;
    }
    
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  render() {
    return (

    // <div className="content-block-body no-padding-top">
      <div className="buttonsContainer" >
        <div className="peopleDiv">
        Party Size
        <People appStatePassed={this.props.appState} />
        </div>
<div className= "calendarAndDate" >
  <div className="calendar"> 
         <p> Date </p>
          <DayPickerInput
            className="Selectable"
            placeholder={
              `${(new Date()).getFullYear().toString()  }-${  
              (new Date()).getMonth().toString()  }-${  (new Date()).getDate().toString()}`}
            selectedDays={this.state.selectedDay}
            onDayChange={this.handleDayClick}
          />
          </div>
          <div className="time-picker">
            Time
            <TimeSelect appStatePassed={this.props.appState} />
          
          </div>
 </div>



  <div
            onClick={this.props.qFn}
            className="submit"
            value="Find a Table"
            className="TableSearch" 
          >Find a Table
       
</div>
                <div className="allTimes">
        {(this.props.appStateQueried) ? <RestaurantDisplay appState={this.props.appState} /> : <div />}
                </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
window.App = App;
