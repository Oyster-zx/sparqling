import Constants from "../Constants";

export const setQueryToRun = (queryToRun) => dispatch => {
    dispatch({
        type: 'SET_QUERY_TO_RUN',
        queryToRun: queryToRun
    })
};

export const deleteQueryCategorization = (queryCategorizationId) => dispatch => {
    return fetch(`${Constants.REST_API}/queryCategorization?queryCategorizationId=${queryCategorizationId}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json", "Accept": "application/json"}
    })
        .then(() => dispatch({
            type: "DELETE_QUERY_CATEGORIZATION",
            data: queryCategorizationId
        }))
        .catch(err => dispatch(
            {type: "ERROR", msg: "Unable to fetch data", e: err}))
};
