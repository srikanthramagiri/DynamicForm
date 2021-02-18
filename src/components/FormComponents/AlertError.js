import React from "react";
import { Alert } from "react-bootstrap";
import PropTypes from "prop-types"

export default function AlertError(props) {
  let { variant, message } = props;
  return <Alert variant={variant}> {message} </Alert>;
}

AlertError.protoTypes = {
  varian: PropTypes.string,
  message: PropTypes.string
}

AlertError.defaultProps = {
  message: 'Not Valid'
};