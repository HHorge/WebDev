const toggleSideMenu = (state = false, action) => {
    switch(action.type){
        case 'SIDEMENU':
            return !state;
        default:
            return state;
    }
}

export default toggleSideMenu;