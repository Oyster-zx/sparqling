/*
 src/actions/queryEditorAction.js
*/
export const saveQuery = (queryDocument) => dispatch => {
    dispatch({
        type: 'SAVE_QUERY',
        queryDocument: queryDocument
    })
};