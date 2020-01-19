import React from 'react';
import { Field, reduxForm } from 'redux-form';

class LogInForm extends React.Component {

  componentWillUnmount() {

  }
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, placeholder, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>

        <div className='ui left input'>
          <input {...input} autoComplete="off" type={type} placeholder={placeholder}/>

        </div>
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
          className="ui large form error"
        >
          <div className='ui stacked segment'>
            <Field
              name="email"
              component={this.renderInput}
              placeholder="Enter Email"
            />

            <Field
              name="password"
              component={this.renderInput}
              placeholder="Enter Password"
              type="password"
            />
            <button className="ui button primary">Log In</button>
          </div>
        </form>      
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.email) {
    errors.email = 'You must enter a email';
  }

  if (!formValues.password) {
    errors.password = 'You must enter a password';
  }

  return errors;
};

export default reduxForm({
  form: 'logIn',
  validate
})(LogInForm);
