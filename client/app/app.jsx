import 'react-dates/initialize';
import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import DayPicker, { DateUtils } from 'react-day-picker';
import style from './style.css';
import RestaurantDisplay from './display.jsx';
import TimeSelect from './timeselect.jsx';
import People from './people.jsx';


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
      url: '/',
      data: {
        people: this.state.people,
        date: this.state.date,
        time: this.state.time,
        restaurantName: this.state.restaurantName,
      },
    }).then((response) => {
      app.setState({ queried: true });
      console.log(response);
      app.setState({ tablesAvaiable: response.data.tablesLeft });
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
    // $('.DayPicker-Day')
    // $('.DayPicker-Day').on('click', function(){
    //   props.appState.date = this.attributes["aria-label"].value;
    //   this.color = "white";
    //   this.style['border-color'] = "#da3743";
    //   // $(this).toggle()
    //   // console.log(props.appState)
    // })

    // $('.DayPicker-Day').on('mouseover', function(){
    //   this.style.cursor="pointer";
    //   // let toggleCover = $("<div>test</div>");
    //   // $(this).toggle()
    //   // $(this).toggleClass('selected');
    // })
  }

  // handleDayClick(day, { sunday, disabled }) {
  //   // this.props.appState.date = e;
  //   // console.log(e)
  //   //capture the exact div that you clicked and save it in the state
  //   //so if you click something else it will toggle back to the original form
  //   console.log(this.props.appState)
  //   if (sunday) {
  //     window.alert('Sunday has been clicked');
  //   }
  //   if (disabled) {
  //     window.alert('This day is disabled');
  //   }
  //   console.log(day)
  // }
  handleDayClick(day, { selected }) {
    this.props.appState.date = day;
    console.log(this.props.appState);

    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  render() {
    return (

    // <div className="content-block-body no-padding-top">
      <div className="container" >
        <div className="pickerForm" id="dtp-search-single-box">
          <div className="party-size-picker dtp-picker-selector select-native unselected-on-init">

            <People appStatePassed={this.props.appState} />
          </div>

          <DayPicker
            className="Selectable"
            selectedDays={this.state.selectedDay}
            onDayClick={this.handleDayClick}
          />
          <div className="time-picker dtp-picker-selector select-native unselected-on-init">
            <a className="select-label dtp-picker-selector-link" tabIndex="-1" />
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
