import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { Field } from "redux-form";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <>
    <Input {...input} placeholder={label} type={type} />
    {touched &&
      ((error && <small className="text-danger">{error}</small>) ||
        (warning && <small className="text-warning">{warning}</small>))}
  </>
);

export default function FormField({ name, type, placeholder }) {
  return (
    <FormGroup>
      <Label>{placeholder}</Label>
      <Field
        name={name}
        component={renderField}
        type={type}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}
