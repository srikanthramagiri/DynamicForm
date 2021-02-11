import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import AlertError from "./AlertError";
import Label from "./Label";

export default function SelectFeild(props) {
  let { values, validation, label, name, changeHandler } = props;
  let { regex, errormessage } = validation ? validation : {};
  let [isValid, setIsValid] = useState(true);
  let [country, setCountry] = useState();

  const onchangeHandler = (e) => {
    let reg = new RegExp(regex);
    if (e.target.value === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    changeHandler(e);
    setCountry(e.target.value);
  };

  const onBlurHandler = (e)=> {
    if (e.target.value === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }
  return (
    <Row>
      <Col lg={6} md={6}>
        <Label name={name} label={label} />
      </Col>
      <Col lg={6} md={6}>
        <Form.Control
          as="select"
          value={country}
          name={name}
          onChange={onchangeHandler}
          onBlur = {onBlurHandler}
        >
          <option value="">select</option>
          {values.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </Form.Control>
      </Col>
      <Col lg={6}></Col>
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
