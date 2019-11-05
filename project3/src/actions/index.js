export const increment = () => {
    return {
        type : 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type : 'DECREMENT'
    };
};

export const search = (base) => {
    return {
        type : 'SEARCH',
        payload : base
    };
};

export const albums = (a) => {
    return {
        type : 'ALLALBUMS',
        payload : a
    };
};

export const filter = (q) => {
    return{
        type : 'FILTER',
        payload : q
    } 
}

export const details = (a) => {
    return{
        type : 'DETAILS',
        payload : a
    }
}

export const nextPage = () => {
    return{
        type : 'NEXT'
    }
}

export const prevPage = () => {
    return{
        type : 'PREVIOUS'
    }
}

export const defaultPage = () => {
    return{
        type : 'DEFAULT'
    }
}