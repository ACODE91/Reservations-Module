import 'react-dates/initialize';
import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import DayPicker, { DateUtils } from 'react-day-picker';
import style from './style.css';
import RestaurantSearch from './restaurantSearch.jsx'

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
      const timesArray = response.data;
      app.setState({ queried: true, timesAvailable: timesArray });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="content-block-header">
        <div className="reservation-header">Make a reservation</div>
        <RestaurantSearch
          qFn={this.findTable.bind(this)}
          appStateQueried={this.state.queried}
          appState={this.state}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
window.App = App;
