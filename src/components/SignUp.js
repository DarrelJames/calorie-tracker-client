import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Segment, Message} from 'semantic-ui-react'

class SignUp extends React.Component {
  componentWillUnmount() {

  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <Message negative>
          <Message.Header content={error}/>
        </Message>
      );
    }
  }

  renderInput = ({ input, placeholder, type, meta }) => {
    const error = meta.error && meta.touched ? true : false
    return (
      <>
        <Form.Input error={error} {...input} fluid icon='user' iconPosition='left' placeholder={placeholder} type={type} />

        {this.renderError(meta)}
      </>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
    this.props.reset()
  };

  render() {
    const loading = this.props.status === 'loading' ? true : false
    return (
      <Form size='large' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Segment stacked>
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
          <Button loading={loading} primary fluid size='large'>
            Signup
          </Button>
          </Segment>
        </Form>
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
