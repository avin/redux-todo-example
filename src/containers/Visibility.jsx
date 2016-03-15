import {connect} from 'react-redux';
import Visibility from '../components/Visibility.jsx';

let mapStateToProps = (state) => ({
    visibility: state.visibility
});

let mapDispatchToProps = (dispatch) => ({
    setVisibility(visibility) {dispatch({type: 'SET_VISIBILITY', visibility: visibility})}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Visibility);