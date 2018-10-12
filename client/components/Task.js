import React from 'react';
import { string, number, func } from 'prop-types';
import taskStyle from '../emotion/task';

const propTypes = {
  onDelete: func.isRequired,
  position: number,
  priority: string,
  title: string,
  status: string,
};

const defaultProps = {
  position: 0,
  priority: 'Low',
  title: '',
  status: 'New',
};

const Task = ({ title, priority, position, status, onDelete }) => (
  <div className={taskStyle}>
    <span onClick={onDelete}>x</span>
    <h4>{title}</h4>
    <p>Priority: {priority}</p>
    <p>Position: {position}</p>
    <p>Status: {status}</p>
  </div>
);

Task.propTypes = propTypes;
Task.defaultProps = defaultProps;

export default Task;
