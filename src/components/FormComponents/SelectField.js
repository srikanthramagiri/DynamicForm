import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import AlertError from "./AlertError";
import Label from "./Label";
import PropTypes from "prop-types";

export default function SelectField(props) {
  let { values, validation, label, name, changeHandler } = props;
  let { regex, errorMessage } = validation ? validation : {};
  let [isValidSelect, setIsValidSelect] = useState(true);
  let [country, setCountry] = useState();

  const onChangeHandler = (e) => {
    let reg = new RegExp(regex);
    if (e.target.value === "") {
      setIsValidSelect(false);
    } else {
      setIsValidSelect(true);
    }
    changeHandler(e);
    setCountry(e.target.value);
  };

  const onBlurHandler = (e) => {
    if (e.target.value === "") {
      setIsValidSelect(false);
    } else {
      setIsValidSelect(true);
    }
  };

  return (
    <Row>
      <Col lg={6} md={6}>
        <Label name={name} label={label} />
      </Col>
      <Col lg={6} md={6}>
        <Form.Control
          as={'select'}
          data-test='select-field'
          value={country}
          name={name}
          onChange={(e) => onChangeHandler(e)}
          onBlur={(e) => onBlurHandler(e)}
        >
          <option value="">Select</option>
          {values.map((option,i) => (
            <option value={option} key={i}>{option}</option>
          ))}
        </Form.Control>
      </Col>
      <Col lg={6} />
      <Col lg={6} md={6}>
        {!isValidSelect ? (
          <AlertError variant={"danger"} message={errorMessage} />
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
}

SelectField.propTypes = {
  values: PropTypes.array,
  validation: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  changeHandler: PropTypes.func,
};
