import React, { Component } from 'react'
// import Log from '../components/Log'
import MealGroup from './MealGroup'
import DaySelect from '../components/DaySelect'
import { fetchLog, selectDay } from '../actions'
import { connect } from 'react-redux'
import history from '../history'


class LogContainer extends Component {

  componentDidMount() {
    if (this.props.match.params.date) {
      this.props.fetchLog(this.props.match.params.date)
    } else {
      history.push(`/logs/${this.props.logs.date}`)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.logs.date !== this.props.logs.date){
      this.props.fetchLog(this.props.match.params.date)
    }
  }




  render() {
    if (this.props.fetchingLog)
      return <div>Loading</div>
    return (
        <div>
          <div><DaySelect selectDay={(date) => this.props.selectDay(date)}log={this.props.logs}/></div>

          <MealGroup category="Breakfast"/>
          <MealGroup category="Lunch"/>
          <MealGroup category="Dinner"/>
          <MealGroup category="Snacks"/>
        </div>
      )
    }

  }



const mapStateToProps = ({ logs }) => {
  return {logs}
}

export default connect(mapStateToProps, { fetchLog, selectDay })(LogContainer)
