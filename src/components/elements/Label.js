import React from "react";
import { Form } from "react-bootstrap";

export default function Label(props) {
  let { name, label } = props;
  return <Form.Label htmlFor={name}>{label}</Form.Label>;
}
