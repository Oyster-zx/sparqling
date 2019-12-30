export const updateQueryCategorization = (queryCategorization) => dispatch => {
    return fetch(`http://localhost:8080/api/v1/updateQueryCategorization`, {
        method: "POST",
        body: JSON.stringify(queryCategorization),
        headers: {"Content-Type": "application/json", "Accept": "application/json"}
    })
        .then(() => dispatch({
            type: "SAVE_QUERY_CATEGORIZATION",
            data: {
                status: "ok"
            }
        }))
        .catch(err => dispatch(
            {type: "ERROR", msg: "Unable to fetch data", e: err}))
};

export const createQueryCategorization = (queryCategorization) => dispatch => {
    return fetch(`http://localhost:8080/api/v1/createQueryCategorization`, {
        method: "POST",
        body: JSON.stringify(queryCategorization),
        headers: {"Content-Type": "application/json", "Accept": "application/json"}
    })
        .then(() => dispatch({
            type: "CREATE_QUERY_CATEGORIZATION",
            data: {
                status: "ok"
            }
        }))
        .catch(err => dispatch(
            {type: "ERROR", msg: "Unable to fetch data", e: err}))
};
