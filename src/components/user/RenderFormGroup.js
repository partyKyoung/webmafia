import React from 'react';
import { FormGroup, Input } from 'reactstrap';

function RendorFormGroup (field) {
  return (
    <FormGroup>
      <Input className={"w-100" + (field.meta.touched && field.meta.error ? " is-invalid" : '')}
        {...field.input} type={field.type}
        placeholder={field.placeholderMessage}
        disabled={field.meta.asyncValidating}
      />
      {
        field.meta.touched && field.meta.error && 
        <span className="invalid-feedback mt-1 text-left">{field.meta.error}</span>
      }
    </FormGroup>  
  );
}

export default RendorFormGroup;