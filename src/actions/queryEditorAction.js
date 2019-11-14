/*
 src/actions/queryEditorAction.js
*/
export const saveQuery = (query) => dispatch => {
    dispatch({
        type: 'SAVE_QUERY',
        query: query
    })
};