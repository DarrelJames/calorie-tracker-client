import React, { Component } from 'react'
// import Log from '../components/Log'
import MealGroup from './MealGroup'
import { fetchLogs, selectLog } from '../actions'
import { connect } from 'react-redux'
import _ from 'lodash'
class LogContainer extends Component {

  componentDidMount() {
    this.props.fetchLogs()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.logs.selected_log.id !== this.props.logs.selected_log.id || _.isEmpty(prevProps.logs.selected_log)) {
      this.props.selectLog(this.props.logs.current_log)
    }
  }



  render() {

    return (
      <div>
        <div>back</div>
        <div>back</div>
        <MealGroup category="Breakfast"/>
        <MealGroup category="Lunch"/>
        <MealGroup category="Dinner"/>
        <MealGroup category="Snacks"/>
      </div>
    );
  }

}

const mapStateToProps = ({ logs }) => {
  return {logs}
}

export default connect(mapStateToProps, { fetchLogs, selectLog })(LogContainer)
