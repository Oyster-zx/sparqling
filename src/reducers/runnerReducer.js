export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_ENDPOINT':
            return {
                ...state,
                endpoint: action.endpoint
            };
        default:
            return state
    }
}