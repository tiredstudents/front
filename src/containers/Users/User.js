import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserEdit from "./UserEdit";

export class User extends Component {
  state = {
    showEdit: false
  };
  render() {
    const {
      first_name,
      last_name,
      phone,
      post,
      is_resourse,
      email
    } = this.props.appState.user;
    return (
      <div>
        <Link to="/users/home">Return to Your Dashboard</Link>
        <br></br>
        <br></br>
        <h3>Your Account Information</h3>
        <br></br>
        <br></br>
        <br></br>
        <Container>
          <br></br>

          <Row>
            <Col>
              <h5>First Name: {first_name}</h5>
            </Col>
            <Col>
              <h5>Last Name: {last_name}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Phone: {phone}</h5>
            </Col>
            <Col>
              <h5>Post: {post}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Resourse: {is_resourse}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Email: {email}</h5>
            </Col>
          </Row>
        </Container>

        <br></br>
        <br></br>
        <br></br>

        <Button
          variant="dark"
          size="lg"
          id="otherButtons"
          onClick={() => this.setState({ showEdit: !this.state.showEdit })}
        >
          Edit Your Account Information
        </Button>
        <br></br>
        <br></br>
        <br></br>
        {this.state.showEdit ? (
          <UserEdit
            user={this.props.appState.user}
            appState={this.props.appState}
            updateUserState={this.props.updateUserState}
          />
        ) : null}
      </div>
    );
  }
}

export default withRouter(User);
