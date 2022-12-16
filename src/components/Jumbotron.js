import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import boxes from "../assets/boxLove.jpg";
import ice from "../assets/ice.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${ice}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    min-height: 350px !important;
    // height: 200;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1 style={{width: 1000, fontSize: 54}}>ИТ-решения для развития вашего бизнеса</h1>
        <p style={{fontSize: 24}}>Разработка программного обеспечения</p>
      </Container>
    </Jumbo>
  </Styles>
);
