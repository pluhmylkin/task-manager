import React, { Component } from 'react';
import { func } from 'prop-types';
import inputStyle from '../emotion/input';
import buttonStyle from '../emotion/button';
import taskEditorStyle from '../emotion/taskEditor';

class TaskEditor extends Component {
  static propTypes = {
    onTaskAdd: func.isRequired,
  };

  state = {
    title: '',
  };

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleTaskAdd() {
    const newTask = {
      title: this.state.title,
    };

    this.props.onTaskAdd(newTask);
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
        <button className={buttonStyle} disabled={!title} onClick={this.handleTaskAdd}>
          Добавить
        </button>
      </div>
    );
  }
}

export default TaskEditor;
