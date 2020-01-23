import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import history from '../history'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
export default class DaySelect extends Component {
  state = {
      startDate: new Date(this.props.log.date)
    };

    handleChange = date => {
      this.setState({
        startDate: date
      })
      const formattedDate = moment(date).format('YYYY-MM-DD')     
      this.props.selectDay(formattedDate)

    };

    render() {
      return (
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      );
    }

}
