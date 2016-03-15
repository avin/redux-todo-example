import _ from 'lodash';

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
        {
            let id = _.get(_.last(state), 'id', 0) + 1;
            return [
                ...state,
                {
                    text: action.text,
                    id: id,
                    completed: false
                }
            ];
        }
        case 'REMOVE_TODO':
        {
            return _.filter(state, (item) => {
                return item.id !== action.id
            });
        }
        case 'TOGGLE_TODO':
        {
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }

                return Object.assign({}, todo, {completed: !todo.completed});
            })
        }
        default:
            return state;
    }
};

export default todos;