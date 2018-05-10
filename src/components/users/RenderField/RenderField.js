import React from 'react';

function RenderField(field) {
  return (
    <div className="form-group">
      <input
        className={`form-control ${(field.meta.touched && field.meta.error ? ' is-invalid' : '')}`}
        type={field.type}
        placeholder={field.placeholder}
        {...field.input}
      />
      {
        field.meta.touched && field.meta.error &&
        <div className="invalid-feedback" >{field.meta.error}</div>
      }
    </div>
  );
}

export default RenderField;