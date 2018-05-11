import React, { Component } from 'react';
import { Form, Input, Select } from 'semantic-ui-react';


class FormField extends Component {
  render() {
    const { name, label, type } = this.props.field;
    let fieldControl = Input;
    const allOptions = [];

    if (type === 'dropdown') {
      fieldControl = Select;

      this.props.field.options.map(option => (
        allOptions.push({ key: option, text: option, value: option })
      ));
    }


    return (
      <Form.Field
        key={name}
        fluid
        control={fieldControl}
        label={label}
        name={name}
        options={allOptions}
        onChange={this.props.onChange}
      />
    );
  }
}

export default FormField;
