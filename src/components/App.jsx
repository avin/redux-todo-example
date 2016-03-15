import React from 'react';
import TodoList from '../containers/TodoList.jsx';
import AddTodo from '../containers/AddTodo';
import Visibility from '../containers/Visibility';

export default class extends React.Component {
    render() {
        return (
            <div>
                <TodoList />
                <AddTodo />
                <Visibility />
            </div>
        )
    }
}