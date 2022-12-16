import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h3>{this.props.userState.user.first_name} {this.props.userState.user.last_name}</h3>
          <p>Должность: {this.props.userState.user.post}</p>
          <br></br>
          <Container>
            <Row>
              <Col>
                <Link to="/projects">
                  <Button variant="secondary" size="lg" id="myButton">
                    Проекты
                  </Button>
                </Link>
              </Col>

              <Col>
                <Link to="/users/favorites">
                  <Button variant="secondary" size="lg" id="myButton">
                    Ресурсы
                  </Button>
                </Link>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Link to="/find">
                  <Button variant="secondary" size="lg" id="myButton">
                    Кандидаты
                  </Button>
                </Link>
              </Col>

              <Col>
                <Link to="/grades">
                  <Button variant="secondary" size="lg" id="myButton">
                    Грейды
                  </Button>
                </Link>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Link to="/orders/history">
                  <Button variant="secondary" size="lg" id="myButton">
                    Вакансии
                  </Button>
                </Link>
              </Col>
              <Col>
                {" "}
                <Link to="/user/account">
                  <Button variant="secondary" size="lg" id="myButton">
                    {" "}
                    Личный кабинет{" "}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
