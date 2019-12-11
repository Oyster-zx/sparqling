export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_QUERY_CATEGORIZATION_TO_EDIT':
            return {
                ...state,
                queryCategorizationToEdit: action.queryCategorizationToEdit
            };
        default:
            return state
    }
}