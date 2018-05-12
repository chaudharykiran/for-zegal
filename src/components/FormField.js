import React from 'react';
import { Form, Input, Select } from 'semantic-ui-react';


const FormField = (props) => {
  const { name, label, type } = props.field;
  let fieldControl = '';
  const allOptions = [];

  if (type === 'dropdown') {
    fieldControl = Select;

    props.field.options.map(option => (
      allOptions.push({ key: option, text: option, value: option })
    ));
  } else {
    fieldControl = Input;
  }


  return (
    <Form.Field
      key={name}
      fluid
      control={fieldControl}
      label={label}
      name={name}
      options={allOptions}
      onChange={props.onChange}
    />
  );
};

export default FormField;
