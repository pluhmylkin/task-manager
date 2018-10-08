import React from 'react';
import createReactClass from 'create-react-class';

import TaskEditor from './TaskEditor.js';
import TasksGrid from './TasksGrid.js';

import apiTask from '../api/task';
import appStyle from '../emotion/app';

import { connect } from 'react-redux';

const App = createReactClass({
  componentDidMount: function() {
    this.props.loadTasks();
  },

  handleLoadTasks() {
    this.props.loadTasks();
  },

  handleTaskAdd(data) {
    this.props.addTask(data);
  },

  handleTaskDelete(task) {
    this.props.deleteTask(task._id);
  },

  render() {
    return (
      <div className={appStyle}>
        <h2 className="App__header">TasksApp</h2>
        <TaskEditor onTaskAdd={this.handleTaskAdd} />
        <TasksGrid tasks={this.props.tasks} onTaskDelete={this.handleTaskDelete} />
      </div>
    );
  },
});

export default connect(
  state => ({
    tasks: state,
  }),
  dispatch => ({
    addTask: newTask => {
      apiTask
        .createTask(newTask)
        .then(task => dispatch({ type: 'ADD_TASK', task }))
        .catch(err => console.error(err));
    },
    loadTasks: () => {
      apiTask
        .listTasks()
        .then(listTasks => dispatch({ type: 'LOAD_TASK_SUCCESS', task: listTasks }))
        .catch(err => console.error(err));
    },
    deleteTask: taskId => {
      apiTask
        .deleteTask(taskId)
        .then(_id => dispatch({ type: 'DELETE_TASK', _id }))
        .catch(err => console.error(err));
    },
  })
)(App);
