export const expand = (expanded) => dispatch => {
    dispatch({
        type: 'EXPAND',
        expanded: expanded
    })
};

export const check = (checked) => dispatch => {
    dispatch({
        type: 'CHECK',
        checked: checked
    })
};

export const fetchCategories = () => dispatch => {
    return fetch('http://localhost:8080/api/v1/categories')
        .then(response => response.json())
        .then(json => dispatch(
            {type: "FETCH_CATEGORIES", data: json}))
        .catch(err => dispatch(
            {type: "ERROR", msg: "Unable to fetch data", e: err}))
};
export const fetchCategorizations = () => dispatch => {
    return fetch('http://localhost:8080/api/v1/categorizations')
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