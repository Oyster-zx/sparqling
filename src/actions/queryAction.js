export const editQueryDocument = (queryDocument) => dispatch => {
    dispatch({
        type: 'EDIT_QUERY_DOCUMENT',
        queryDocument: queryDocument
    })
};
