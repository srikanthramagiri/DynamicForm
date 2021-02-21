import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getInputFeild, getTextAreaFeild, getSelectFeild } from "./FormComponents/Utility";

export default function DynamicForm(data) {
  let [submitFormData, setSubmitFormData] = useState({});
  let [isValidForm, setIsValidForm] = useState(true);

  const changeHandler = (e) => {
    setSubmitFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  let { fields } = { ...data.formData };
  const formSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div data-test='dynamic-form'>
      <Form className= {'form'} data-test='form' onSubmit={formSubmit}>
        {fields.map((formElement, i) => {
          if (formElement.type === 'text' || formElement.type === 'number') {
            return getInputFeild(formElement, i, changeHandler);
          }
          if (formElement.type === 'text_area') {
            return getTextAreaFeild(formElement, i, changeHandler);
          }
          if (formElement.type === 'dropdown') {
            return getSelectFeild(formElement, i, changeHandler);
          }
        })}
        <Button
          style={{marginTop: "30px"}}
          variant="secondary"
          type="submit"
          disabled={!isValidForm}
          role="submit"
          className={'submit-button'}
        >
          submit
        </Button>

        <div style={{ marginTop: "30px" }} role="presentation json data">
          {" "}
          Submit Data State: {JSON.stringify(submitFormData)}{" "}
        </div>
      </Form>
    </div>
  );
}
