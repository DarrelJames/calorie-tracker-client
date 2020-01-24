import React, { Component } from 'react';
import FoodSearchForm from '../components/FoodSearchForm'
import FoodSearchItems from '../components/FoodSearchItems'
import { connect } from 'react-redux'
import { searchFood } from '../actions'

 class FoodSearch extends Component {

  handleSubmit = searchTerm => {
    this.props.searchFood(searchTerm)
  }
  render() {
    return (
      <>
        <FoodSearchForm onSubmit={this.handleSubmit}/>

        <FoodSearchItems {...this.props} foods={this.props.foods} searching={this.props.searching}/>

      </>
    );
  }

}

const mapStateToProps = state => {
  return { foods: state.edamam.foods, searching: state.edamam.searching }
}

export default connect(mapStateToProps, { searchFood })(FoodSearch)
