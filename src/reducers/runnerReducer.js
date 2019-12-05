export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_ENDPOINT':
            return {
                ...state,
                endpoint: action.endpoint
            };
        case 'RUN_QUERY':
            return {
                ...state,
                queryResult: action.queryResult
            };
        default:
            return state
    }
}