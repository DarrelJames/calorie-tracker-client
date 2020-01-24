import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

export default class DaySelect extends Component {
  constructor(props) {
    super(props)

    const [year, month, day] = props.log.date.split('-')
    this.state = {
      startDate: new Date(year, month - 1, day)
    }
  }


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
