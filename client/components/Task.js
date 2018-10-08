import React from 'react';
import createReactClass from 'create-react-class';
import taskStyle from '../emotion/task';

const Task = createReactClass({
  render() {
    return (
      <div className={taskStyle}>
        <span onClick={this.props.onDelete}>x</span>
        <h4>{this.props.title}</h4>
        {this.props.priority}
        {this.props.position}
        {this.props.status}
      </div>
    );
  },
});

export default Task;
