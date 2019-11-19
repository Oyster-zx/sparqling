export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case 'EDIT_QUERY_DOCUMENT':
            return {
                ...state,
                queryDocument: action.queryDocument
            };
        default:
            return state
    }
}