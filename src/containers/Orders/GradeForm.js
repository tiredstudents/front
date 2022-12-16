import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./style.css";


const current = new Date();

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = true);
  });
  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = true);
  });

  return valid;
};

class GradeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      specialization: null,
      created_at: current.toLocaleDateString(),
      updated_at: current.toLocaleDateString(),
      formErrors: {
        specialization: "",
        created_at: "",
        updated_at: ""
      }
    };
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "specialization":
        formErrors.specialization = value.length < 1 ? "Specilization is required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {

      fetch("http://192.168.99.100:3000/api/v1/grades", {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': localStorage.getItem('token')
        }),
        body: eval("`specialization=${this.state.specialization}&created_at=${this.state.created_at}&updated_at=${this.state.updated_at}`")
      }).then(
        response =>
          response.json().then(data => {
            console.log(data);
            console.log(data.status);
            data.status === 200
              ? this.props.history.push("/success")
              : this.props.history.push("/signup");
          })
      );
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  render() {
    const { formErrors } = this.state;
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmit}>
          <h2>Создание грейда</h2>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Специализация</Form.Label>
              <Form.Control
                className={
                  formErrors.specialization.length > 0
                    ? "signup-create-errorBorder"
                    : null
                }
                isInvalid={formErrors.specialization}
                name="specialization"
                type="text"
                placeholder="Специализация"
                onChange={this.handleChange}
              />
              {formErrors.specialization.length > 0 && (
                <span className="signup-create-errorMessage">
                  {formErrors.specialization}
                </span>
              )}
            </Form.Group>

          </Form.Row>
          
          <br></br>
          <Button bg="dark" variant="dark" type="submit" id="otherButtons">
            Создать
          </Button>
        </Form>
        <br></br>
        <br></br>
        <br></br>
      </React.Fragment>
    );
  }
}

export default withRouter(GradeForm);
