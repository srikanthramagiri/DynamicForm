import React from 'react'
import InputTextField from "./InputTextField";
import InputTextAreaField from "./InputTextAreaField";
import SelectField from "./SelectField";

export function getInputField(formEle, i, changeHandler) {
    let {
        type,
        name,
        placeholder,
        required,
        label,
        validation,
      } = formEle;

      return (
        <InputTextField
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          label={label}
          changeHandler={changeHandler}
          key={i}
          validation={validation}
        ></InputTextField>
      );
}

export function getTextAreaField(formEle, i, changeHandler) {
    let {
        type,
        name,
        placeholder,
        required,
        label,
        rows,
        cols,
        validation,
      } = formEle;
      return (
        <InputTextAreaField
          key={i}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows}
          cols={cols}
          label={label}
          validation={validation}
          changeHandler={changeHandler}
        />
      );
}

export function getSelectField(formEle, i, changeHandler) {
    let { values, validation, name, label } = formEle;
    return (
      <SelectField
        name={name}
        label={label}
        values={values}
        validation={validation}
        key={i}
        changeHandler={changeHandler}
      />
    );
}