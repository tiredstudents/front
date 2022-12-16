import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Styles = styled.div`
  .stat-box {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
  }

  .col {
    border: 1px;
    border-radius: 100px;
    margin-right: 20px;
    text-align: center;
  }

  .end-col {
    margin-right: 0px;
  }
  .stat-text {
    font-size: 80px;
  }

  .helper-text {
    text-align: center;
    color: #727372;
  }

  .statistic-box {
    padding: 20px 0 20px 0;
  }
  .source-text{
    color: #a6a6a6
    font-size: 12px;
  }
`;

export const Stats = () => (
  <Styles>
    <Container>
      <Row>
        <Col>
          <div className="statistic-box">
            <h1 className="stat-text">320+</h1>
            <h6 className="helper-text">успешных проектов</h6>
          </div>
        </Col>
        <Col>
          <div className="statistic-box">
            <h1 className="stat-text">15</h1>
            <h6 className="helper-text">
              лет в бизнесе
            </h6>
          </div>
        </Col>
        <Col className="end-col">
          <div className="statistic-box">
            <h1 className="stat-text">99%</h1>
            <h6 className="helper-text">
              постоянные клиенты
            </h6>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="statistic-box">
            <h5>ГЛУБОКАЯ ЭКСПЕРТИЗА</h5>
            <h6 className="helper-text">За более чем 15 лет мы реализовали сотни выдающихся проектов, которые помогли нашим клиентам достичь своих бизнес-целей</h6>
          </div>
        </Col>
        <Col>
          <div className="statistic-box">
            <h5>ЭКСПЕРТЫ В РАЗНЫХ ОБЛАСТЯХ</h5>
            <h6 className="helper-text">
             Софт Технолоджи работает с компаниями по всему миру, задействуя лучшие практики и ИТ-тренды
            </h6>
          </div>
        </Col>
        <Col className="end-col">
          <div className="statistic-box">
          <h5>ПРИЗНАНИЕ КЛИЕНТОВ</h5>
            <h6 className="helper-text">
            Высокие стандарты качества и эффективность работы позволили нам получить признание на рынке, превратив большинство наших заказчиков в постоянных клиентов
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
    <br></br>
  </Styles>
);
