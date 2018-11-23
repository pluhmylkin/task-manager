import React, { Component } from 'react';
import styled from 'react-emotion';
import { func } from 'prop-types';
import BaseButton from './buttons/BaseButton';
import BaseInput from './inputs/BaseInput';

const TaskEditorStyle = styled('div')`
  height: 120px;
  color: white;
  background: #dcdcdc;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 16px;
  margin: 16px auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;

class TaskEditor extends Component {
  static propTypes = {
    onTaskAdd: func.isRequired,
  };

  state = {
    title: 'test',
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleTaskAdd = () => {
    const { title } = this.state;
    const { onTaskAdd } = this.props;

    const newTask = {
      title,
    };

    onTaskAdd(newTask);
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;
    return (
      <TaskEditorStyle>
        <BaseInput
          placeholder="Введите задачу"
          value={title}
          onChange={this.handleTitleChange}
        />

        <BaseButton title="Add" onClick={this.handleTaskAdd} disabled={!title} />
      </TaskEditorStyle>
    );
  }
}

export default TaskEditor;
