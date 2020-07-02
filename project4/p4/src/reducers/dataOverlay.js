const dataOverlayReducer = (state = false, action) => {
    switch(action.type){
        case 'DATAOVERLAY':
            state = !state;
            return state;
        default:
            return state;
    }
}

export default dataOverlayReducer;