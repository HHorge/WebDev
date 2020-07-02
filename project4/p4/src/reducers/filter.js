const filterReducer = (state = '', action) => {
    switch(action.type){
        case 'FILTER':
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default filterReducer;