export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case 'FETCH_QUERY_CATEGORIZATIONS':
            return {
                ...state,
                queryCategorizations: action.data
            };
        default:
            return state
    }
}