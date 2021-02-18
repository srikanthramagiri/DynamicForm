import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import AlertError from "./AlertError";
import Label from "./Label";
import PropTypes from "prop-types"

export default function InputTextAreaFeild(props) {
  let {
    name,
    type,
    placeholder,
    label,
    text,
    changeHandler,
    rows,
    cols,
    validation,
  } = props;

  let { regex, errorMessage } = validation ? validation : {};
  let [isValidText, setIsValidText] = useState(true);
  let [areaText, setAreaText] = useState();

  let textAreaChangeHandler = (e) => {
    setIsValidText(true);
    setAreaText(e.target.value);
    changeHandler(e);
  };

  let textAreaBlurHandler = (e) => {
    if (e.target.value === "") {
      setIsValidText(false);
    }
    let regexValidation = new RegExp(regex);
    setIsValidText(regexValidation.test(e.target.value));
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
          value={areaText}
          rows={rows}
          cols={cols}
          onChange={ (e) => textAreaChangeHandler(e)}
          onBlur={(e) => textAreaBlurHandler(e)}
        />
      </Col>
      <Col lg={6} md={6} />
      <Col lg={6} md={6}>
        {!isValidText ? (
          <AlertError variant={"danger"} message={errorMessage} />
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
}

InputTextAreaFeild.prototype = {
  name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    text: PropTypes.string,
    changeHandler: PropTypes.func,
    rows:  PropTypes.number,
    cols: PropTypes.number,
    validation: PropTypes.object
}

InputTextAreaFeild.defaultProps = {
    rows:  20,
    cols: 40
}