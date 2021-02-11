import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getInputFeild, getTextArea, getSelect } from "./elements/utility";

export default function DynamicForm(data) {
  let [submitformData, setSubmitformData] = useState({});
  let [isValidForm, setIsValidForm] = useState(true);
  const changeHandler = (e) => {
    setSubmitformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  let { fields } = { ...data.formdata };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("submitformdata", submitformData);
  };

  return (
    <div className="form-main">
      <Form onSubmit={formSubmit}>
        {fields.map((formEle, i) => {
          if (formEle.type === "text" || formEle.type === "number") {
            return getInputFeild(formEle, i, changeHandler);
          }
          if (formEle.type === "text_area") {
            return getTextArea(formEle, i, changeHandler);
          }
          if (formEle.type === "dropdown") {
            return getSelect(formEle, i, changeHandler);
          }
        })}
        <Button
          style={{ marginTop: "30px" }}
          variant="secondary"
          type="submit"
          disabled={!isValidForm}
        >
          submit
        </Button>

        <div style={{ marginTop: "30px" }}>
          {" "}
          submit data state: {JSON.stringify(submitformData)}{" "}
        </div>
      </Form>
    </div>
  );
}
