export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_QUERY_TO_RUN':
            console.log(action)
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
            console.log(action.data)
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
            console.log(formattedResult)
            for (let i = 0; i < rows.length; ++i) {
                let formattedRow = {};
                for (let head of headers) {
                    formattedRow[head] = rows[i][head] ? rows[i][head].value : " "

                }
                formattedResult.rows[i] = formattedRow;
            }
            console.log(formattedResult);
            return {
                ...state,
                queryResult: formattedResult
            };
        default:
            return state
    }
}