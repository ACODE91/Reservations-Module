import React from 'react';
import {render} from 'react-dom';
import style from './style.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class SingleDatePicker extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: null,
        focused: null
      };
      this.onDateChange = this.onDateChange.bind(this);
    }
  
    onDateChange(date) {
      this.setState({
        selectedStartDate: date,
      });
    }
    render() {

    }
  }
  
