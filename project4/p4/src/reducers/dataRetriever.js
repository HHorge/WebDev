const dataRetrieverReducer = (state = '', action) => {
    switch(action.type){
        case 'RETRIEVE':
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default dataRetrieverReducer;
