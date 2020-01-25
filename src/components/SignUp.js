import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SignUp extends React.Component {
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
          <input {...input} placeholder={placeholder} autoComplete="off" type={type}/>
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
    const className = `ui button primary ${this.props.status === 'loading' ? 'loading' : ''}`
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui large form error"
      >
        <div className='ui stacked segment'>
          <Field name="name" component={this.renderInput} placeholder="Enter Name" type='text'/>
          <Field
            name="email"
            component={this.renderInput}
            placeholder="Enter Email"
            type='text'
          />

          <Field
            name="password"
            component={this.renderInput}
            type="password"
            placeholder="password"
          />
          <button className={className}>Sign Up</button>
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'You must enter a name';
  }

  if (!formValues.email) {
    errors.email = 'You must enter a email';
  }

  if (!formValues.password) {
    errors.password = 'You must enter a password';
  }

  return errors;
};

export default reduxForm({
  form: 'signUp',
  validate
})(SignUp);
