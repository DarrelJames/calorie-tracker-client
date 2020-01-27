import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Segment, Message} from 'semantic-ui-react'
class LogInForm extends React.Component {

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
      <>
        <Form size='large' onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Segment stacked>
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
            <Button loading={loading} primary fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
      </>
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
