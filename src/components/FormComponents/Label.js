import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Label(props) {
  let {  label } = props;
  return <Form.Label >{label }</Form.Label>;
}

Label.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
