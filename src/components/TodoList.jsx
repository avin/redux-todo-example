import React from 'react';
import TodoItem from './TodoItem.jsx';

export default class extends React.Component {
    static propTypes = {
        todos: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            text: React.PropTypes.string.isRequired,
            completed: React.PropTypes.bool
        })).isRequired,
        onTodoToggle: React.PropTypes.func.isRequired,
        onTodoRemove: React.PropTypes.func.isRequired
    };

    render() {
        let todos = this.props.todos.map((todo, key) => (
            <TodoItem todo={todo} key={todo.id}
                      onClick={this.props.onTodoToggle.bind(this, todo.id)}
                      onRemove={this.props.onTodoRemove.bind(this, todo.id)}
            />
        ));

        return (
            <div>
                {todos}
            </div>
        )
    }
}