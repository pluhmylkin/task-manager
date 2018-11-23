import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { func, arrayOf, shape } from 'prop-types';

import TaskEditor from './TaskEditor';
import TasksGrid from './TasksGrid';

import apiTask from '../api/task';

const AppStyle = styled('div')`
  max-width: 1200px;
  width: 100%;
  h2 {
    text-align: center;
    font-weight: 500;
    text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.5);
  }
`;

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

  handleTaskAdd = newTask => {
    const { dispatch } = this.props;
    apiTask
      .createTask(newTask)
      .then(task => dispatch({ type: 'ADD_TASK', task }))
      .catch(err => console.error(err));
  };

  handleLoadTasks = () => {
    this.loadTasks();
  };

  handleTaskDelete = id => {
    const { dispatch } = this.props;
    apiTask
      .deleteTask(id)
      .then(_id => dispatch({ type: 'DELETE_TASK', _id }))
      .catch(err => console.error(err));
  };

  render() {
    const { tasks } = this.props;
    return (
      <AppStyle>
        <h2 className="App__header">TasksApp</h2>
        <TaskEditor onTaskAdd={this.handleTaskAdd} />
        <TasksGrid tasks={tasks} onTaskDelete={this.handleTaskDelete} />
      </AppStyle>
    );
  }
}
App.propTypes = {
  dispatch: func.isRequired,
  tasks: arrayOf(shape({})).isRequired,
};
export default connect(state => ({
  tasks: state,
}))(App);
