import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardHeader, Button, Collapse } from "reactstrap";
import { toggleIsOpen } from "../Redux/Actions/taskActions";
import TaskForm from "./TaskForm";

class FormCollapse extends Component {
  toggleIsShow = () => {
    this.props.toggleIsOpen();
  };
  render() {
    const { taskState } = this.props;
    return (
      <Card className="shadow-sm mt-5">
        <CardHeader>
          Tasks{" "}
          <Button className="float-right" size="sm" onClick={this.toggleIsShow}>
            {taskState.isOpen ? (
              <i className="fa fa-minus-square-o"></i>
            ) : (
              <i className="fa fa-plus-square-o"></i>
            )}
          </Button>
        </CardHeader>
        <Collapse isOpen={taskState.isOpen}>
          <CardBody>
            <TaskForm />
          </CardBody>
        </Collapse>
      </Card>
    );
  }
}

const mapsStateToProps = (state) => ({
  taskState: state.taskManger,
});

const mapDispatchToProps = (dispatch) => ({
  toggleIsOpen: () => dispatch(toggleIsOpen()),
});

export default connect(mapsStateToProps, mapDispatchToProps)(FormCollapse);
