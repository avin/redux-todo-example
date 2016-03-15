import {connect} from 'react-redux';
import AddTodo from '../components/AddTodo.jsx';

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
    addTodo(text) {dispatch({type: 'ADD_TODO', text: text})}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);