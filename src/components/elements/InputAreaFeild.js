import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import AlertError from "./AlertError";

import Label from "./Label";
export default function InputAreaFeild(props) {
  let {
    name,
    type,
    placeholder,
    label,
    text,
    changeHandler,
    rows = 10,
    cols = 20,
    validation,
  } = props;

  let { regex, errormessage } = validation ? validation : {};
  let [isValid, setIsValid] = useState(true);
  let [areatext, setAreaText] = useState();

  let inputchangeHandler = (e) => {
    setIsValid(true);
    setAreaText(e.target.value);
    changeHandler(e);
  };
  let textAreaBlurValidation = (e) => {
    if (e.target.value === "") {
      setIsValid(false);
    }
    let reg = new RegExp(regex);
    setIsValid(reg.test(e.target.value));
  };

  return (
    <Row>
      <Col lg={6} md={6}>
        <Label name={name} label={label} />
      </Col>
      <Col lg={6} md={6}>
        <Form.Control
          as="textarea"
          type={type}
          name={name}
          placeholder={placeholder}
          value={areatext}
          rows={rows}
          cols={cols}
          onChange={inputchangeHandler}
          onBlur={textAreaBlurValidation}
        />
      </Col>
      <Col lg={6} md={6}></Col>
      <Col lg={6} md={6}>
        {!isValid ? (
          <AlertError variant={"danger"} message={errormessage}></AlertError>
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
}
