import React from 'react'
import InputTextFeild from "./InputTextFeild";
import InputAreaFeild from "./InputAreaFeild";
import SelectFeild from "./selectFeild";

export function getInputFeild(formEle, i, changeHandler) {
    let {
        type,
        name,
        placeholder,
        required,
        label,
        validation,
      } = formEle;

      return (
        <InputTextFeild
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          label={label}
          changeHandler={changeHandler}
          key={i}
          validation={validation}
        ></InputTextFeild>
      );
}

export function getTextArea(formEle, i, changeHandler) {
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
        <InputAreaFeild
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

export function getSelect(formEle, i, changeHandler) {
    let { values, validation, name, label } = formEle;
    return (
      <SelectFeild
        name={name}
        label={label}
        values={values}
        validation={validation}
        key={i}
        changeHandler={changeHandler}
      ></SelectFeild>
    );
}