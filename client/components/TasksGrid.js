import React from 'react';
import styled from 'react-emotion';
import Masonry from 'react-masonry-component';
import { arrayOf, string, shape, number, func } from 'prop-types';
import Task from './Task';

const TasksGridStyle = styled('div')`
  margin: 0 auto;
`;

const masonryOptions = {
  columnWidth: 250,
  gutter: 10,
  isFitWidth: true,
};

const propTypes = {
  onTaskDelete: func.isRequired,
  tasks: arrayOf(
    shape({
      _id: string,
      position: number,
      priority: string,
      title: string,
      status: string,
    })
  ),
};

const defaultProps = {
  tasks: [],
};

const TasksGrid = ({ tasks, onTaskDelete }) => (
  <TasksGridStyle>
    <Masonry options={masonryOptions}>
      {tasks &&
        tasks.map(task => (
          <Task
            {...task}
            onDelete={onTaskDelete}
          >
            {task.title}
          </Task>
        ))}
    </Masonry>
  </TasksGridStyle>
);

TasksGrid.propTypes = propTypes;
TasksGrid.defaultProps = defaultProps;

export default TasksGrid;
