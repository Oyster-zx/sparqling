/*
 src/actions/queryEditorAction.js
*/
export const saveQuery = (queryCategorization) => dispatch => {
    return fetch(`http://localhost:8080/api/v1/saveQueryCategorization`, {
        method: "POST",
        body: queryCategorization,
        headers: {"Content-Type": "application/json", "Accept": "application/json"}
    })
        .then(() => dispatch({
            type: "SAVE_QUERY",
            data: {
                status: "ok"
            }
        }))
        .catch(err => dispatch(
            {type: "ERROR", msg: "Unable to fetch data", e: err}))
};