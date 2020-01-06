export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_QUERY_TO_RUN':
            if (state.queryToRun === action.queryToRun) {
                return state;
            } else {
                return {
                    ...state,
                    queryToRun: action.queryToRun,
                    queryResult: undefined
                }
            }
        case 'SET_ENDPOINT':
            return {
                ...state,
                endpoint: action.endpoint
            };
        case 'SET_QUERY_RESULT':
            let headers = action.data.head.vars;
            let rows = action.data.results.bindings;
            let formattedResult = {columns: [], rows: []};
            for (let i = 0; i < headers.length; ++i) {
                formattedResult.columns[i] =
                    {
                        label: headers[i],
                        field: headers[i],
                        sort: 'asc',
                        width: 150
                    }
            }
            for (let i = 0; i < rows.length; ++i) {
                let formattedRow = {};
                for (let head of headers) {
                    formattedRow[head] = rows[i][head] ? rows[i][head].value : " "

                }
                formattedResult.rows[i] = formattedRow;
            }
            return {
                ...state,
                queryResult: formattedResult
            };
        case 'SET_QUERY_FAIL':
            console.log(typeof (action.error))
            console.log(action.error)
            return {
                ...state,
                queryFail: action.error
            };
        case 'DELETE_QUERY_RESULT':
            return {
                ...state,
                queryResult: null,
                queryFail: null
            };
        default:
            return state
    }
}