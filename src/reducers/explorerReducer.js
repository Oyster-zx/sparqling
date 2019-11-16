export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case 'EXPAND':
            return {
                ...state,
                expanded: action.expanded
            };
        case 'CHECK':
            return {
                ...state,
                checked: action.checked
            };
        case 'FETCH_CATEGORIES':
            return {
                ...state,
                categories: action.data
            };
        case 'FETCH_CATEGORIZATIONS':
            return {
                ...state,
                categorizations: action.data
            };

        case 'SET_CATEGORIZATION':
            return {
                ...state,
                selectedCategorizationId: action.categorizationId
            };
        default:
            return state
    }
}