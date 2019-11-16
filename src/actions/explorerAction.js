export const expand = (expanded) => dispatch => {
    console.log("expand" + expanded)
    dispatch({
        type: 'EXPAND',
        expanded: expanded
    })
};

export const check = (checked) => dispatch => {
    console.log("checked" + checked)
    dispatch({
        type: 'CHECK',
        checked: checked
    })
};

// export const fetchCategorization = () => dispatch => {
//     return fetch('https://private-d945c-sparqler.apiary-mock.com/categorization')
//         .then(response => response.json())
//         .then(json => dispatch(
//             {type: "FETCH_DATA", data: json}))
//         .catch(err => dispatch(
//             {type: "ERROR", msg: "Unable to fetch data", e: err}))
// };


export const fetchCategories = () => dispatch => {
    return fetch('http://localhost:8080/api/v1/categories')
        .then(response => response.json())
        .then(json => dispatch(
            {type: "FETCH_DATA", data: json}))
        .catch(err => dispatch(
            {type: "ERROR", msg: "Unable to fetch data", e: err}))
};
