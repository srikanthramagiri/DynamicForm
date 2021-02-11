import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Label from "./Label";
import AlertError from "./AlertError";

export default function InputTextFeild(props) {
  let { name, type, placeholder, label, changeHandler, validation } = props;
  let { regex, errormessage } = validation ? validation : {};
  let [isvalid, setIsValid] = useState(true);
  const inputHandler = (e) => {
    setIsValid(true);
  };

  const blurHandlerValiation = (e) => {
    if (e.target.value === "") {
      setIsValid(false);
    }
    let reg = new RegExp(regex);
    setIsValid(reg.test(e.target.value));
    changeHandler(e);
  };

  return (
    <Form.Group controlId="">
      <Row>
        <Col lg={6} md={6}>
          <Label name={name} label={label} />
        </Col>
        <Col lg={6} md={6}>
          <Form.Control
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={inputHandler}
            onBlur={blurHandlerValiation}
            max={100}
          />
        </Col>
        <Col lg={6}></Col>
        <Col lg={6}>
          {!isvalid ? (
            <AlertError variant={"danger"} message={errormessage}></AlertError>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Form.Group>
  );
}
