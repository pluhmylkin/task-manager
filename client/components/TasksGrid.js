import React from 'react';
import Masonry from 'react-masonry-component';
import { arrayOf, string, shape, number, func } from 'prop-types';
import taskStyle from '../emotion/task';
import Task from './Task.js';

const masonryOptions = {
  itemSelector: `.${taskStyle}`,
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
  <Masonry className="TasksGrid" options={masonryOptions}>
    {tasks.map(task => (
      <Task
        key={task._id}
        title={task.title}
        priority={task.priority}
        position={task.position}
        status={task.status}
        onDelete={onTaskDelete.bind(null, task)}
      >
        {task.title}
      </Task>
    ))}
  </Masonry>
);

TasksGrid.propTypes = propTypes;
TasksGrid.defaultProps = defaultProps;

export default TasksGrid;
