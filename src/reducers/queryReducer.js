export default (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_QUERY_DOCUMENT':
            return {
                ...state,
                queryDocument: action.queryDocument
            };
        case 'DELETE_QUERY_CATEGORIZATION':
            return state;
        default:
            return state
    }
}