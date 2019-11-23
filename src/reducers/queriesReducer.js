export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_QUERY_CATEGORIZATIONS':
            return {
                ...state,
                queryCategorizations: action.data
            };
        case 'DELETE_QUERY_CATEGORIZATION':
            let temp = [];
            for (let i = 0; i < state.queryCategorizations.length; ++i) {
                if (state.queryCategorizations[i].id !== action.data) {
                    temp.push(state.queryCategorizations[i]);
                }
            }
            return {
                ...state,
                queryCategorizations: temp
            };
        default:
            return state
    }
}