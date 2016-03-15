import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import todoReducer from './reducers/index';

let initialState = {
    todos: [
        {
            id: 1,
            text: 'First todo',
            completed: false
        },
        {
            id: 2,
            text: 'Second todo',
            completed: true
        }
    ]
};

let store = createStore(todoReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
);