const SELECT_LIBRARY = 'SELECT_LIBRARY';

export const selectLibrary = (id) => {
    return {
        type: SELECT_LIBRARY,
        payload: id
    };
};
