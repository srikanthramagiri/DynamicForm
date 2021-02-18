import React from 'react'
import InputTextFeild from "./InputTextFeild";
import InputTextAreaFeild from "./InputTextAreaFeild";
import SelectFeild from "./SelectFeild";

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

export function getTextAreaFeild(formEle, i, changeHandler) {
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
        <InputTextAreaFeild
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

export function getSelectFeild(formEle, i, changeHandler) {
    let { values, validation, name, label } = formEle;
    return (
      <SelectFeild
        name={name}
        label={label}
        values={values}
        validation={validation}
        key={i}
        changeHandler={changeHandler}
      />
    );
}