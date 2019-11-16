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
        case 'FETCH_DATA':
            return {
                ...state,
                categories: action.data
            };
        default:
            return state
    }
}