export const setEndpoint = (endpoint) => dispatch => {
    dispatch({
        type: 'SET_ENDPOINT',
        endpoint: endpoint
    })
};