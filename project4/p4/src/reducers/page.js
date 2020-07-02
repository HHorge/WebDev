const pageReducer = (state = 0, action) => {
    switch(action.type){
        case 'NEXT':
            state += 1;
            return state;
        case 'PREVIOUS':
            state -= 1;
            return state
        case 'DEFAULT':
            return 0;
        default:
            return state;
    }
}

export default pageReducer;