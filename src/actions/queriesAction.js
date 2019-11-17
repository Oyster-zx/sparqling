export const fetchQueryDocuments = (categorizationId, categories) => dispatch => {
    if (categorizationId && categories) {
        console.log(`http://localhost:8080/api/v1/queryDocuments?categorizationId=${categorizationId}&categoriesIds=${categories.map(category => category.id)}`)
        return fetch(`http://localhost:8080/api/v1/queryDocuments?categorizationId=${categorizationId}&categoriesIds=${categories.map(category => category.id)}`)
            .then(response => response.json())
            .then(json => dispatch(
                {type: "FETCH_QUERY_CATEGORIZATIONS", data: json}))
            .catch(err => dispatch(
                {type: "ERROR", msg: "Unable to fetch data", e: err}))
    }
};
