import axios from 'axios';

import { api } from '../config.json';

export default {
  listTasks() {
    return axios
      .get(`${api}/?query={getListTask{_id, title, status, priority, finish}}`)
      .then(response => response.data.data.getListTask);
  },

  createTask(data) {
    return axios
      .post(`${api}/`, {
        query: `mutation{addTask(title:"${data.title}"){_id, title,status,priority,finish}}`,
      })
      .then(response => response.data.data.addTask);
  },

  deleteTask(taskId) {
    return axios
      .post(`${api}/`, { query: `mutation{deleteTask(id:"${taskId}"){_id}}` })
      .then(task => taskId);
  },
};
