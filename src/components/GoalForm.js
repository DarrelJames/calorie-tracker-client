import React from 'react';
import { Field, reduxForm } from 'redux-form';

class GoalForm extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, placeholder, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>

        <input {...input}
          autoComplete="off"
          placeholder={placeholder}
        />

        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
    this.props.reset()
  };

  render() {
    return (
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error segment stacked"
        >
          <div className='ui four fields'>
            <Field
              name="carbs"
              component={this.renderInput}
              label='Carbohydrates(g)'
            />

            <Field
              name="fat"
              component={this.renderInput}
              label='Fat(g)'
            />
            <Field
              name="protein"
              component={this.renderInput}
              label='Protein(g)'

            />
            <Field
              name="calories"
              component={this.renderInput}
              label='Calories'
            />

          </div>
          <button className="ui button green">Save Goal</button>
        </form>
    );
  }
}

// const validate = formValues => {
//   const errors = {};
//
//   if (!formValues.carbs) {
//     errors.carbs = 'You must enter a carbs';
//   }
//
//   if (!formValues.fat) {
//     errors.fat = 'You must enter a fat';
//   }
//   if (!formValues.protein) {
//     errors.protein = 'You must enter a protein';
//   }
//   if (!formValues.calories) {
//     errors.calories = 'You must enter a calories';
//   }
//
//   return errors;
// };

export default reduxForm({
  form: 'goal',
   enableReinitialize: true
})(GoalForm);
