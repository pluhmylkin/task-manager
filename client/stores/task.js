import {createStore} from 'redux'

const TasksStore = (state = [], action) => {
    if (state === undefined) {
        state = [];
    }

    if (action.type === 'ADD_TASK') {
        return [
            ...state,
            action.task
            ];
    }
    if (action.type === 'LOAD_TASK_SUCCESS') {
        return action.task;
    }
    if (action.type === 'DELETE_TASK') {
        return state.filter(item => item._id !== action._id)
        //return action.taskID;
    }
    return state
}

export default createStore(TasksStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());