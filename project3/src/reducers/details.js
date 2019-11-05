const detailsReducer = (state = '', action) => {
    switch(action.type){
        case 'DETAILS':
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default detailsReducer;
