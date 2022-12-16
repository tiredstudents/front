import React, { Component, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from 'axios';

function Projects() {

    const token = localStorage.getItem('token');
    const [projects, setProjects] = useState(null);
    const url = "http://192.168.99.100:3000/api/v1/projects";
    console.log(token);

    fetch(url, {
        "method": 'GET',
        "headers": new Headers({
            'Authorization': token
        })
     })
        .then(response => {
            setProjects(response)
        })
        .catch(error => {
            console.log(error);
        })
    console.log(projects);

    // const [projects, setProjects] = useState(null);
    // const token = localStorage.getItem('token');
    // fetch("http://192.168.99.100:3000/api/v1/projects", {
    //   method: "GET",
    //   //mode: 'no-cors',
    //   headers: new Headers({
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${token}`
    //   })})
    //   .then(response => {
    //     console.log(response);
    //     if (!response.status === 201) {
    //       console.log("ошибка какая-то");
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     setProjects(data);
    //     console.log(projects);
    //   })

    return (
        <div>
          <Link to="/users/home">Назад</Link>
          <br></br>
          <br></br>
          <h3>Список проектов</h3>
          <br></br>
          <br></br>
          <h5>Нажмите для редактирования</h5>
          <br></br>
          <Link to="/projects/create">
            <Button bg="dark" variant="dark" id="otherButtons" style={{width: 120}}>
              Создать
            </Button>
          </Link>
          <br></br>
          <br></br>
          <br></br>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Название</th>
                <th>Дата начала</th>
                <th>План. дата окончания</th>
                <th>Дата окончания</th>
                <th>Статус</th>
                <th>Владелец проекта</th>
                <th>Менеджер проекта</th>
                <th>Стоимость</th>  
              </tr>
            </thead>
            {/* <tbody>
              {this.props.projects.map(project => (
                <tr
                  className="clickable-row"
                  key={project.id}
                  onClick={() => this.sendClickedProject(project.id)}
                >
                  <td>{project.name}</td>
                  <td>{project.start_date.substr(0, 10)}</td>
                  <td>{project.estimated_end_date.substr(0, 10)}</td>
                  <td>{project.end_date.substr(0, 10)}</td>
                  <td>{project.status}</td>
                  <td>{project.owner_id}</td>
                  <td>{project.manager_id}</td>
                  <td>{project.price}</td>
                </tr>
              ))}
            </tbody> */}
          </Table>
        </div>
    );
}
export default withRouter(Projects);
