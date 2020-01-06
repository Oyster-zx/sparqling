export const setEndpoint = (endpoint) => dispatch => {
    dispatch({
        type: 'SET_ENDPOINT',
        endpoint: endpoint
    })
};

export const deleteQueryResult = () => dispatch => {
    dispatch({
        type: 'DELETE_QUERY_RESULT'
    })
};

export const runQuery = (endpoint, query) => dispatch => {
    console.log(`Sending ${query} to ${endpoint}`);
    return fetch(endpoint, {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json"},
        body: `${encodeURIComponent("query")}=${encodeURIComponent(query)}`
    })
        .then(response => response.json())
        .then(json => dispatch({
            type: 'SET_QUERY_RESULT',
            data: json
        }))
        .catch(err => dispatch(
            {type: "SET_QUERY_FAIL", error: err.toString()}))
};
