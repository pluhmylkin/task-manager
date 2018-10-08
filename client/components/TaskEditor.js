import React from 'react';
import createReactClass from 'create-react-class';

import inputStyle from '../emotion/input';
import buttonStyle from '../emotion/button';
import taskEditorStyle from '../emotion/taskEditor';

const TaskEditor = createReactClass({
  getInitialState() {
    return {
      title: 'test',
    };
  },

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  },

  handleTaskAdd() {
    const newTask = {
      title: this.state.title,
    };

    this.props.onTaskAdd(newTask);
    this.setState({ title: '' });
  },

  render() {
    return (
      <div className={taskEditorStyle}>
        <input
          type="text"
          className={inputStyle}
          placeholder="Введите задачу"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <button className={buttonStyle} disabled={!this.state.title} onClick={this.handleTaskAdd}>
          Добавить
        </button>
      </div>
    );
  },
});

export default TaskEditor;
