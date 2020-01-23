import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createEntry } from '../actions'


class FoodSearchItem extends Component {
  constructor(props) {
    super(props)
    this.fat = props.FAT ? Math.ceil(props.FAT) : 0
    this.protein = props.PROCNT ? Math.ceil(props.PROCNT) : 0
    this.calories = props.ENERC_KCAL ? Math.ceil(props.ENERC_KCAL) : 0
    this.carbs = props.CHOCDF ? Math.ceil(props.CHOCDF) : 0

    this.state = {
      hidden: true,
      value: 1,
      food: {
        label: props.label,
        fat: this.fat,
        protein: this.protein,
        calories: this.calories,
        carbs: this.carbs
      }
    };
  }


   handleClick = () => {
     this.setState(prevState => ({hidden: !prevState.hidden}))
   }
   handleChange = (e) => {
     e.persist()
     this.setState(prevState => {

      return { ...prevState,
         value: e.target.value,
         food: { ...prevState.food,
           fat: this.fat * e.target.value,
           protein: this.protein * e.target.value,
           calories: this.calories * e.target.value,
           carbs: this.carbs * e.target.value
         }
       }
     })
   }

   handleAddClick = () => {
     const query = new URLSearchParams(this.props.search)

     this.props.createEntry({category: query.get('category'), foods_attributes: [{label: this.props.label, fat: this.fat, protein: this.protein, calories: this.calories, carbs: this.carbs}]})
   }

   renderAdd = () => {
     if (!this.state.hidden) {
       return (
         <tr>
           <td colSpan='5'>
             <div className='ui form'>
               <div className='field'>
                 <input
                   type='text'
                   className='ui input'
                   style={{width: '50px'}}
                   value={this.state.value}
                   onChange={e => this.handleChange(e)}
                 ></input>
                 <div onClick={this.handleAddClick} className="ui positive button">
                   Add
                 </div>
               </div>
             </div>
           </td>
         </tr>
       )
     }
   }

   render() {
    return (
      <>
        <tr style={{cursor: 'pointer'}} onClick={this.handleClick}>
          <td>{this.props.label}</td>
          <td>{this.state.food.carbs}</td>
          <td>{this.state.food.protein}</td>
          <td>{this.state.food.fat}</td>
          <td>{this.state.food.calories}</td>
        </tr>
        {this.renderAdd()}
      </>
    )
  }
}

 export default connect(null, { createEntry })(FoodSearchItem)
