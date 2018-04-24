import React from 'react';
import TimeSelect from './timeselect.jsx';
import RestaurantDisplay from './display.jsx';
import People from './people.jsx';
import DayPickerInput from 'react-day-picker/DayPickerInput';

export default class RestaurantSearch extends React.Component {
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
    const year = JSON.stringify(day).slice(1, 5);
    const month = JSON.stringify(day).slice(6, 8);
    let formatedDay = JSON.stringify(day).slice(9, 11);

    if (formatedDay[0] === '0') {
      formatedDay = formatedDay.slice(1);
    }

    if (month[0] === '0') {
      this.props.appState.date = `${month[1]}/${formatedDay}/${year}`;
    } else if (month[0] !== '0') {
      this.props.appState.date = `${month}/${formatedDay}/${year}`;
    }

    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  render() {
    return (
        <div className="buttonsContainer" >
          <div className="party">
          Party Size
            <People appStatePassed={this.props.appState} />
          </div>
          <div className="calendarAndDate" >
             
            <div className="calendar">
            <span>Date</span>
              <DayPickerInput
                className="Selectable"
                placeholder="Today"
                selectedDays={this.state.selectedDay}
                onDayChange={this.handleDayClick}
              />
            </div>
            <span>Time</span>
            <div className="time-picker">
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
