import React, { Component } from 'react';
import { func } from 'prop-types';
import inputStyle from '../emotion/input';
import taskEditorStyle from '../emotion/taskEditor';
import BaseButton from './buttons/BaseButton';

class TaskEditor extends Component {
  static propTypes = {
    onTaskAdd: func.isRequired,
  };

  state = {
    title: 'test',
  };

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleTaskAdd() {
    const { title } = this.state;
    const { onTaskAdd } = this.props;

    const newTask = {
      title,
    };

    onTaskAdd(newTask);
    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;
    return (
      <div className={taskEditorStyle}>
        <input
          type="text"
          className={inputStyle}
          placeholder="Введите задачу"
          value={title}
          onChange={this.handleTitleChange}
        />
        <BaseButton title="Add" onClick={this.handleTaskAdd} disabled={!title} />
      </div>
    );
  }
}

export default TaskEditor;
