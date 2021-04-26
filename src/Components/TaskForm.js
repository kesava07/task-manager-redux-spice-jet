import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Form, Row, Button } from "reactstrap";
import { reduxForm } from "redux-form";
import { addTask, cancelAddOrUpdate, deleteTask } from "../Redux/Actions/taskActions";
import FormField from "./FormField";
import { v4 as uuidv4 } from "uuid";
import md5 from "md5";

const validate = (values) => {
  const errors = {};
  if (!values.taskDescription) {
    errors.taskDescription = "Required";
  }
  if (!values.date) {
    errors.date = "Required";
  }
  if (!values.time) {
    errors.time = "Required";
  }
  if (!values.assignUser) {
    errors.assignUser = "Required";
  }

  return errors;
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
class TaskFrom extends Component {
  taskSubmit = async (values) => {
    await sleep(2000);
    if (values) {
      const newValues = {
        ...values,
        id: uuidv4(),
        avatar: `http://gravatar.com/avatar/${md5(
          values.assignUser
        )}?d=identicon`,
      };
      return this.props.addTask(newValues);
    }
  };
  cancelAdd = async () => {
    this.props.cancelAddOrUpdate();
  };
  handleDeleteTask = () =>{
    this.props.deleteTask()
  }
  render() {
    const { submitting, handleSubmit, taskState } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.taskSubmit)}>
        <Row>
          <Col lg="12">
            <FormField
              className="form-control"
              name="taskDescription"
              component="input"
              type="text"
              placeholder="Task Description"
            />
          </Col>
          <Col lg="6">
            <FormField
              className="form-control"
              name="date"
              component="input"
              type="date"
              placeholder="Date"
            />
          </Col>
          <Col lg="6">
            <FormField
              className="form-control"
              name="time"
              component="input"
              type="time"
              placeholder="Time"
            />
          </Col>
          <Col lg="12">
            <FormField
              className="form-control"
              name="assignUser"
              component="input"
              type="text"
              placeholder="Assign User"
            />
          </Col>
          <Col lg="12">
            {taskState.isEdit && (
              <Button type="button" onClick={this.handleDeleteTask} size="sm" color="danger">
                <i className="fa fa-trash fa-lg mt-2"></i>
              </Button>
            )}

            <div className="float-right">
              <Button
                onClick={this.cancelAdd}
                className="mr-2"
                type="button"
                color="secondary"
              >
                Cancel
              </Button>
              <Button disabled={submitting} type="submit" color="success">
                Save
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  taskState: state.taskManger,
});
const mapDispatchToProps = (dispatch) => ({
  addTask: (v) => dispatch(addTask(v)),
  cancelAddOrUpdate: () => dispatch(cancelAddOrUpdate()),
  deleteTask: () => dispatch(deleteTask())
});

const TaskFormConnect = connect(mapStateToProps, mapDispatchToProps)(TaskFrom);

export default reduxForm({
  form: "tasks",
  validate,
})(TaskFormConnect);
