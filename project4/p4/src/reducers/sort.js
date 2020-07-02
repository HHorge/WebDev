const sortingReducer = (state = 'name', action) => {
    switch(action.type){
        case 'SORT':
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default sortingReducer;