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
        case 'SAVE_QUERY_CATEGORIZATION':
            let queryCategorizations = [];
            for (let i = 0; i < state.queryCategorizations.length; ++i) {
                if (state.queryCategorizations[i].id === action.updatedQueryCategorization.id) {
                    queryCategorizations.push(action.updatedQueryCategorization);
                } else {
                    queryCategorizations.push(state.queryCategorizations[i]);
                }
            }
            return {
                ...state,
                queryCategorizations: queryCategorizations
            };
        case 'CREATE_QUERY_CATEGORIZATION':
            let queryCategorizations2 = [];
            for (let i = 0; i < state.queryCategorizations.length; ++i) {
                queryCategorizations2.push(state.queryCategorizations[i]);
            }
            queryCategorizations2.push(action.createdQueryCategorization);
            return {
                ...state,
                queryCategorizations: queryCategorizations2
            };
        default:
            return state
    }
}