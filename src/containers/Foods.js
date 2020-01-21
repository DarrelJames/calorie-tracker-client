import React, { Component } from 'react';
import FoodForm from '../components/FoodForm'
import FoodSearchItems from '../components/FoodSearchItems'
import { connect } from 'react-redux'
import { searchFood } from '../actions'

 class Foods extends Component {

  handleSubmit = searchTerm => {
    this.props.searchFood(searchTerm)
  }
  render() {
    return (
      <>
        <FoodForm onSubmit={this.handleSubmit}/>

        <FoodSearchItems {...this.props} foods={this.props.foods} searching={this.props.searching}/>

      </>
    );
  }

}

const mapStateToProps = state => {
  return { foods: state.edamam.foods, searching: state.edamam.searching }
}

export default connect(mapStateToProps, { searchFood })(Foods)
