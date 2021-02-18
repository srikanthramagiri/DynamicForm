import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Label(props) {
  let { name, label } = props;
  return <Form.Label htmlFor={name}>{label}</Form.Label>;
}

Label.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
