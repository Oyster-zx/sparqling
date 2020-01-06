import Constants from "../Constants";

export const fetchQueryDocuments = (categorizationId, categories) => dispatch => {
    if (categorizationId && categories) {
        return fetch(`${Constants.REST_API}/queryCategorizations?categorizationId=${categorizationId}&categoriesIds=${categories.map(category => category.id)}`)
            .then(response => response.json())
            .then(json => dispatch(
                {type: "FETCH_QUERY_CATEGORIZATIONS", data: json}))
            .catch(err => dispatch(
                {type: "ERROR", msg: "Unable to fetch data", e: err}))
    }
};
