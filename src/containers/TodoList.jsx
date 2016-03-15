import {connect} from 'react-redux';
import TodoList from '../components/TodoList.jsx';
import _ from 'lodash';

let setVisibleTodos = (todos, visibility) => {
    return _.compact(todos.map((todo) => {
        let resTodo = null;
        switch (visibility) {
            case 'ALL':
            {
                resTodo = todo;
                break;
            }
            case 'COMPLETED':
            {
                if (todo.completed) {
                    resTodo = todo;
                }
                break;
            }
            case 'NOT_COMPLETED':
            {
                if (!todo.completed) {
                    resTodo = todo;
                }
                break;
            }
        }

        return resTodo;
    }));
};

let mapStateToProps = (state) => ({
    todos: setVisibleTodos(state.todos, state.visibility)
});

let mapDispatchToProps = (dispatch) => ({
    onTodoToggle(id) {
        dispatch({type: 'TOGGLE_TODO', id: id})
    },
    onTodoRemove(id) {
        dispatch({type: 'REMOVE_TODO', id: id})
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);