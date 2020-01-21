import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveGoal, fetchGoal } from '../actions'
import GoalForm from '../components/GoalForm'

class Account extends Component {
  componentDidMount() {
    this.props.fetchGoal()
  }
  handleSubmit = (goalValues) => {
    this.props.saveGoal(goalValues, this.props.goal.id)
  }
  render() {
    console.log(this.props);
    const values = _.pick(this.props.goal, ['carbs', 'protein', 'fat', 'calories'])
    return (
      <div style={{width: '80%', margin: 'auto'}}>
        <h1>My Daily Goals</h1>
        <GoalForm
          onSubmit={this.handleSubmit}
          initialValues={{...values}}
        />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {goal: state.goal.goal}
};



export default connect(
  mapStateToProps,
  { saveGoal, fetchGoal }
)(Account);
