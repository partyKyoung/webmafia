import React from 'react';
import { Field } from 'redux-form';
import RenderField from 'components/users/RenderField';

function LoginForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <Field name="email" type="email" component={RenderField} />
      <Field name="nickName" type="text" component={RenderField} />
      <Field name="password" type="password" component={RenderField} />
      <Field name="password2" type="password" component={RenderField} />
    </form>
  );
}

export default LoginForm;