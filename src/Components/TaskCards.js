import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card, CardBody } from "reactstrap";
import { editTaskStart } from "../Redux/Actions/taskActions";

class TaskCards extends Component {
  handleEditTask = (payLoad) => {
    this.props.editTaskStart(payLoad);
  };

  render() {
    const { taskState } = this.props;

    return (
      <>
        {taskState.tasks &&
          taskState.tasks.map((task) => (
            <Card key={task.id} className="shadow-sm">
              <CardBody>
                <div className="card_content">
                  <img src={task.avatar} alt="logo" />
                  <div className="flex_Conteiner">
                  <span className="description">{task.assignUser}</span>
                    <small>{task.taskDescription}</small>
                    <small className="date text-danger text-small">
                      {task.date}
                    </small>
                  </div>
                  <div className="text-center">
                    <Button onClick={() => this.handleEditTask(task)}>
                      <i className="fa fa-pencil" />
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        {!taskState.tasks.length && (
          <CardBody className="shadow-sm text-center">No Tasks</CardBody>
        )}
      </>
    );
  }
}

const mapsStateToProps = (state) => ({
  taskState: state.taskManger,
});

const mapDispatchToProps = (dispatch) => ({
  editTaskStart: (payload) => dispatch(editTaskStart(payload)),
});

export default connect(mapsStateToProps, mapDispatchToProps)(TaskCards);
