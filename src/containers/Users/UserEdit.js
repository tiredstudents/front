import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

export class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
      phone: null,
      email: null
    };
  }
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  sendUpdatedUser = updatedUser => {
    this.props.updateUserState(updatedUser);
  };

  handleSubmit = e => {
    e.preventDefault();

    let userEdit = {
      first_name: this.state.first_name ? this.state.first_name : this.props.user.first_name,
      last_name: this.state.last_name ? this.state.last_name : this.props.user.last_name,
      phone: this.state.phone
        ? this.state.phone
        : this.props.user.phone,
      email: this.state.email ? this.state.email : this.props.user.email
    };
    console.log(userEdit);

    const configObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userEdit)
    };

    fetch(
      `http://localhost:3000/api/v1/users/${this.props.user.id}/fire`,
      configObject
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        data.status === 204 && this.props.history.push("/user/fire");
        this.sendUpdatedUser(data.user);
      })
      .catch(error => console.log("api errors:", error));
  };

  render() {
    console.log("from UserEdit: ", this.props);
    const { first_name, last_name, phone, email } = this.props.user;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="first_name"
                type="text"
                placeholder={first_name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="last_name"
                type="text"
                placeholder={last_name}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name="phone"
                type="text"
                placeholder={phone}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="text"
                placeholder={email}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Button variant="dark" type="submit" id="otherButtons">
            Submit
          </Button>
        </Form>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default withRouter(UserEdit);
