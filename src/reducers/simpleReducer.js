/*
 src/reducers/simpleReducer.js
*/
export default (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_QUERY':
            return {
                query: action.query
            };
        default:
            return state
    }
}