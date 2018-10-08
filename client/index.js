import React from 'react'
import ReactDOM from 'react-dom'
import store from './stores/task'

import {Provider} from 'react-redux'

import App from './components/App.js'
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('mount-point')
);