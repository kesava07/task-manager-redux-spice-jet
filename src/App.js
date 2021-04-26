import React, { Component } from "react";
import { Col, Container } from "reactstrap";
import FormCollapse from "./Components/FormCollapse";
import TaskCards from "./Components/TaskCards";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Col lg="6" className="m-auto">
          <FormCollapse />
          <TaskCards />
        </Col>
      </Container>
    );
  }
}
