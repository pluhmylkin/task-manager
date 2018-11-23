import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskEditor from './TaskEditor';
import TasksGrid from './TasksGrid';

import apiTask from '../api/task';
import appStyle from '../emotion/app';

class App extends Component {
  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = () => {
    const { dispatch } = this.props;
    apiTask
      .listTasks()
      .then(listTasks => dispatch({ type: 'LOAD_TASK_SUCCESS', task: listTasks }))
      .catch(err => console.error(err));
  };

  handleTaskAdd(newTask) {
    const { dispatch } = this.props;
    apiTask
      .createTask(newTask)
      .then(task => dispatch({ type: 'ADD_TASK', task }))
      .catch(err => console.error(err));
  }

  handleLoadTasks() {
    this.loadTasks();
  }

  handleTaskDelete(task) {
    const { dispatch } = this.props;
    apiTask
      .deleteTask(task._id)
      .then(_id => dispatch({ type: 'DELETE_TASK', _id }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className={appStyle}>
        <h2 className="App__header">TasksApp</h2>
        <TaskEditor onTaskAdd={this.handleTaskAdd} />
        <TasksGrid tasks={this.props.tasks} onTaskDelete={this.handleTaskDelete} />
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state,
}))(App);
