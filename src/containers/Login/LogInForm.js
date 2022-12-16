import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import jwt from 'jwt-decode';
import "./style.css";

function LogInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://192.168.99.100:3000/api/v1/auth", {
      method: "POST",
      //mode: 'no-cors',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json' 
      }),
      body: eval("`email=${email}&password=${password}`")
      })
      .then(response => {
        console.log(response);
        if (!response.status === 201) {
          let errorMsg = {};
          errorMsg.login = "Incorrect email or password";
          setError(errorMsg);
          console.log(errorMsg);
        }
        return response.json();
      })
      .then(data => {
        const token = data.api_token;
        console.log(token);
        const user = data.user;
        console.log(user);
        localStorage.setItem('token', token);
        props.setUserState(user);
        props.history.push("/users/home");
      })
    setEmail("");
    setPassword("");
  };

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <h2>Авторизация</h2>
          <br></br>
          {error.login ? <p className="error">{error.login}</p> : ""}
          <Form.Label>Логин</Form.Label>
          <Form.Control
            value={email}
            isInvalid={error.login}
            onChange={handleEmailChange}
            type="email"
            placeholder="Адрес электронной почты"
          />
          <Form.Text className="text-muted">
          Мы никогда не передадим вашу электронную почту кому-либо еще.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            value={password}
            isInvalid={error.login}
            onChange={handlePasswordChange}
            type="password"
            placeholder="Пароль"
          />
        </Form.Group>
        <br></br>
        <Button bg="dark" variant="dark" type="submit" id="otherButtons" style={{width: 120}}>
          Войти
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(LogInForm);
