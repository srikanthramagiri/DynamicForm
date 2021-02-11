import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertError(props) {
  let { variant, message } = props;
  return <Alert variant={variant}> {message} </Alert>;
}
