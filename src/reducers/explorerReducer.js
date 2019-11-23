export default (state = {}, action) => {
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
        case 'SELECT_CATEGORIZATION':
            return {
                ...state,
                selectedCategorization: action.selectedCategorization
            };
        case 'SELECT_CATEGORIES':
            return {
                ...state,
                selectedCategories: action.selectedCategories
            };
        default:
            return state
    }
}