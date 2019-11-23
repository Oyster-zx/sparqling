export const editQueryDocument = (queryDocument) => dispatch => {
    dispatch({
        type: 'EDIT_QUERY_DOCUMENT',
        queryDocument: queryDocument
    })
};

export const deleteQueryCategorization = (queryCategorizationId) => dispatch => {
    return fetch(`http://localhost:8080/api/v1/deleteQueryCategorization/${queryCategorizationId}`, {
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
