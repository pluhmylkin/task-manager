import React from 'react';
import { string, number, func } from 'prop-types';
import styled from 'react-emotion';

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

const TaskStyle = styled('div')`
  width: 250px;
  height: auto;
  float: left;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 10px;
  margin-bottom: 10px;
  transition: box-shadow 0.3s;
  white-space: pre-wrap;
  word-wrap: break-word;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Task = ({ title, priority, position, status, onDelete }) => (
  <TaskStyle>
    <span onClick={onDelete}>x</span>
    <h4>{title}</h4>
    <p>
      Priority:
      {priority}
    </p>
    <p>
      Position:
      {position}
    </p>
    <p>
      Status:
      {status}
    </p>
  </TaskStyle>
);

Task.propTypes = propTypes;
Task.defaultProps = defaultProps;

export default Task;
