import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  getInputField,
  getTextAreaField,
  getSelectField,
} from "./FormComponents/Utility";

export default function DynamicForm(data) {
  let [submitFormData, setSubmitFormData] = useState({});
  let [isValidForm, setIsValidForm] = useState(true);

  const changeHandler = (e) => {
    setSubmitFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  let { fields } = { ...data.formData };
  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div data-test="dynamic-form">
      <Form className={"form"} data-test="form" onSubmit={formSubmit}>
        {fields.map((formElement, i) => {
          switch (formElement.type) {
            case "text" || "number":
              return getInputField(formElement, i, changeHandler);
              break;
            case "text_area":
              return getTextAreaField(formElement, i, changeHandler);
              break;
            case "dropdown":
              return getSelectField(formElement, i, changeHandler);
              break;
          }
        })}
        <Button
          style={{ marginTop: "30px" }}
          variant="secondary"
          type="submit"
          disabled={!isValidForm}
          role="submit"
          className={"submit-button"}
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
