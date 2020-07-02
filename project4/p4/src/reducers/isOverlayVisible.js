const isOverlayVisibleReducer = (state = false, action) => {
    switch(action.type){
        case 'VISIBLE':
            state = !state;
            return state;
        default:
            return state;
    }
}

export default isOverlayVisibleReducer;