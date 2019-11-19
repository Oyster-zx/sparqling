var mockQuery = "ERROR";

export default (state = {query: mockQuery}, action) => {
    switch (action.type) {
        case 'queryDocument':
            return {
                queryDocument: action.queryDocument
            };
        default:
            return state
    }
}