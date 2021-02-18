import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicForm from "./Components/Home";
import { Container } from "react-bootstrap";

let formData = {
  fields: [
    {
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      required: true,
      label: "First Name",
      validation: {
        regex: "^[a-zA-Zs]+$",
        errorMessage: "Not Valid First Name",
      },
    },
    {
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      required: true,
      label: "Last Name",
      validation: {
        regex: "^[a-zA-Zs]+$",
        errorMessage: "Not valid Last Name",
      },
    },
    {
      name: "age",
      type: "text",
      placeholder: "Age",
      required: true,
      label: "Age",
      validation: {
        regex: "^(0?[1-9]|[1-9][0-9]|[1][1-2][1-9]|100)$",
        errorMessage: "Not Valid Age",
      },
    },
    {
      name: "email",
      type: "text",
      placeholder: "something@email.com",
      required: true,
      label: "Email",
      validation: {
        regex: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
        errorMessage: "Not Valid email",
      },
    },
    {
      name: "country",
      type: "dropdown",
      placeholder: "",
      label: "country",
      values: ["India", "srilanka", "Algeria", "Andorra"],
      validation: {
        regex: "[^s] ",
        errorMessage: "please select country",
      },
    },
    {
      name: "address",
      type: "text_area",
      placeholder: "Address",
      required: true,
      label: "Address",
      rows: 5,
      cols: 50,
      validation: {
        regex: "(?:[A-Z0-9-]+.)+",
        errorMessage: "Not Valid Address",
      },
    },
  ],
};
function App() {
  return (
    <div className="App">
      <Container>
        <DynamicForm formData={formData} />
      </Container>
    </div>
  );
}

export default App;
