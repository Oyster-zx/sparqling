import Constants from "../Constants";

export const updateQueryCategorization = (queryCategorization) => dispatch => {
    return fetch(`${Constants.REST_API}/queryCategorization`, {
        method: "PUT",
        body: JSON.stringify(queryCategorization),
        headers: {"Content-Type": "application/json", "Accept": "application/json"}
    })
        .then(() => dispatch({
            type: "SAVE_QUERY_CATEGORIZATION",
            updatedQueryCategorization: queryCategorization
        }))
        .catch(err => dispatch({type: "ERROR", msg: "Unable to fetch data", e: err}))
};

export const createQueryCategorization = (queryCategorization) => dispatch => {
    console.log(queryCategorization)
    return fetch(`${Constants.REST_API}/queryCategorization`, {
        method: "POST",
        body: JSON.stringify(queryCategorization),
        headers: {"Content-Type": "application/json", "Accept": "application/json"}
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            dispatch({
                type: "CREATE_QUERY_CATEGORIZATION",
                createdQueryCategorization: json
            })
        })
        .catch(err => dispatch(
            {type: "ERROR", msg: "Unable to fetch data", e: err}))
};
