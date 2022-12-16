import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Form, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router";

export class ProjectEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      start_date: null,
      estimated_end_date: null,
      end_date: null,
      status: null,
      owner_id: null,
      manager_id: null,
      price: null
    };
  }
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  sendUpdatedProject = updatedProject => {
    this.props.updateProjectsState(updatedProject);
  };

  handleSubmit = e => {
    e.preventDefault();

    let projectEdit = {
      listing_id: this.props.appState.projectBeingEditListingID,
      name: this.state.name
        ? this.state.name
        : this.props.appState.projectBeingEdit.name,
      start_date: this.state.start_date
        ? this.state.start_date
        : this.props.appState.projectBeingEdit.start_date,
      estimated_end_date: this.state.estimated_end_date
        ? this.state.estimated_end_date
        : this.props.appState.projectBeingEdit.estimated_end_date,
      end_date: this.state.end_date
        ? this.state.end_date
        : this.props.appState.projectBeingEdit.end_date,
      status: this.state.status
        ? this.state.status
        : this.props.appState.projectBeingEdit.status,
      owner_id: this.state.owner_id
        ? this.state.owner_id
        : this.props.appState.projectBeingEdit.owner_id,
      manager_id: this.state.manager_id
        ? this.state.manager_id
        : this.props.appState.projectBeingEdit.manager_id,
      price: this.state.price
        ? this.state.price
        : this.props.appState.projectBeingEdit.price,
    };
    console.log(projectEdit);

    const configObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(projectEdit)
    };

    fetch(
      `http://192.168.99.100:3000/api/v1/projects/${this.props.appState.projectBeingEdit.id}`,
      configObject
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        data.status === 204 && this.props.history.push("/project/updated");
        this.sendUpdatedProject(data.project);
      })
      .catch(error => console.log("api errors:", error));
  };

  render() {
    console.log("from project edit props", this.props);
    const {
      id,
      name,
      start_date,
      estimated_end_date,
      end_date,
      status,
      owner_id,
      manager_id,
      price
    } = this.props.appState.projectBeingEdit;
    return (
      <div>
        <Link to="/projects/history">Назад</Link>
        <br></br>
        <br></br>
        <h3>Текущая информация о преокте</h3>
        <br></br>
        <br></br>

        <Table bordered responsive>
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
          <tbody>
            <tr key={id}>
              <td>{name}</td>
              <td>{start_date.substr(0, 10)}</td>
              <td>{estimated_end_date.substr(0, 10)}</td>
              <td>{end_date.substr(0, 10)}</td>
              <td>{status}</td>
              <td>{owner_id}</td>
              <td>{manager_id}</td>
              <td>{price}</td>
            </tr>
          </tbody>
        </Table>
        <br></br>
        <br></br>
        <h3>Редактирование информации о проекте</h3>
        <br></br>

        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Название</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder={name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Дата начада</Form.Label>
              <Form.Control
                name="start_date"
                type="date"
                placeholder={start_date}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>План. дата окончания</Form.Label>
              <Form.Control
                name="estimated_end_date"
                type="date"
                placeholder={estimated_end_date}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>
                Дата окончания
              </Form.Label>
              <Form.Control
                name="end_date"
                type="date"
                placeholder={end_date}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Status</Form.Label>
              <Form.Control
                name="status"
                as="select"
                onChange={this.handleChange}
              >
                <option>inactive</option>
                <option>development</option>
                <option>stopped</option>
                <option>finished</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Владелец проекта</Form.Label>
              <Form.Control
                name="owner_id"
                type="text"
                placeholder={owner_id}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Менеджер проекта</Form.Label>
              <Form.Control
                name="manager_id"
                type="text"
                placeholder={manager_id}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>
                Стоимость
              </Form.Label>
              <Form.Control
                name="price"
                type="text"
                placeholder={price}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Button variant="dark" type="submit" id="otherButtons">
            Сохранить
          </Button>
        </Form>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default withRouter(ProjectEdit);
