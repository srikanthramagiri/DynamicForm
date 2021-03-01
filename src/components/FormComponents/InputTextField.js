import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Label from "./Label";
import AlertError from "./AlertError";
import PropTypes from "prop-types";

export default function InputTextField(props) {
  let { name, type, placeholder, label, changeHandler, validation } = props;
  let { regex, errorMessage } = validation ? validation : {};
  let [isvalid, setIsValid] = useState(true);
  const inputChangeHandler = (e) => {
    setIsValid(true);
  };

  const inputBlurHandler = (e) => {
    if (e.target.value === "") {
      setIsValid(false);
    }
    let reg = new RegExp(regex);
    setIsValid(reg.test(e.target.value));
    changeHandler(e);
  };

  return (
    <Form.Group controlId={name}>
      <Row>
        <Col lg={6} md={6}>
          <Label name={name} label={label} />
        </Col>
        <Col lg={6} md={6}>
          <Form.Control
            type={type}
            data-test='input-text-field'
            name={name}
            placeholder={placeholder}
            onChange={(e) => inputChangeHandler(e)}
            onBlur={(e) => inputBlurHandler(e)}
            max={100}
          />
        </Col>
        <Col lg={6} />
        <Col lg={6}>
          {!isvalid ? (
            <AlertError variant={"danger"} message={errorMessage}></AlertError>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Form.Group>
  );
}

InputTextField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  changeHandler: PropTypes.func,
  validation: PropTypes.object,
};
