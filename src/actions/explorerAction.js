import Constants from "../Constants";

export const fetchCategories = (categorizationSchemaId) => dispatch => {
    return fetch(`${Constants.REST_API}/categories?categorizationSchemaId=${categorizationSchemaId}`)
        .then(response => response.json())
        .then(json => dispatch(
            {type: "FETCH_CATEGORIES", data: json}))
        .catch(err => dispatch(
            {type: "ERROR", msg: "Unable to fetch data", e: err}))
};
export const fetchCategorizations = () => dispatch => {
    return fetch(`${Constants.REST_API}/categorizations`)
        .then(response => response.json())
        .then(json => dispatch(
            {type: "FETCH_CATEGORIZATIONS", data: json}))
        .catch(err => dispatch(
            {type: "ERROR", msg: "Unable to fetch data", e: err}))
};

export const selectCategorization = (selectedCategorization) => dispatch => {
    dispatch({
        type: 'SELECT_CATEGORIZATION',
        selectedCategorization: selectedCategorization
    })
};

export const selectCategories = (selectedCategories) => dispatch => {
    dispatch({
        type: 'SELECT_CATEGORIES',
        selectedCategories: selectedCategories
    })
};

export const cleanStore = () => dispatch => {
    dispatch({
        type: 'CLEAN_STORE'
    })
};