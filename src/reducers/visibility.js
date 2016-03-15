const visibility = (state = 'ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY':{
            return action.visibility
        }
        default:
            return state;
    }
};

export default visibility;