const albumsReducer = (state = '', action) => {
    switch(action.type){
        case 'ALLALBUMS':
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default albumsReducer;
