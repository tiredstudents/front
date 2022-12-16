import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

export class OrderHistory extends Component {

  sendClickedOrder = grade_id => {
    this.props.setClickedOrder(grade_id);
    this.props.history.push("/order/edit");
  };
  render() {
    return (
        <div>
          <Link to="/users/home">Return to Your Dashboard</Link>
          <br></br>
          <br></br>
          <h3>Список грейдов</h3>
          <br></br>
          <br></br>
          <h5>Нажмите для редактирования</h5>
          <br></br>
          <Link to="/grades/create">
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
                <th>Специализация</th>
                <th>Дата создания</th>
                <th>Последнее обновление</th>
              </tr>
            </thead>
            <tbody>
                <tr
                  className="clickable-row"
                  // key={grade.id}
                  // onClick={() => this.sendClickedOrder(grade.id)}
                >
                  {/* <td>{grade.specialization}</td>
                  <td>{grade.created_at.substr(0, 10)}</td>
                  <td>{grade.updated_at.substr(0, 10)}</td> */}
                  <td>Грейд 1</td>
                  <td>12.02.2022</td>
                  <td>12.06.2022</td>
                </tr>
            </tbody>
          </Table>
        </div>
      );
  }
}

export default withRouter(OrderHistory);
