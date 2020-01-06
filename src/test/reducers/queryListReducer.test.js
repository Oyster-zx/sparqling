import reducer from '../../reducers/queryListReducer'
import expect from 'expect'

describe('explorerReducerTest', () => {
    it('should handle FETCH_QUERY_CATEGORIZATIONS', () => {
        let queryCategorizations = [{id: 1}, {id: 2}];
        expect(
            reducer([], {
                type: 'FETCH_QUERY_CATEGORIZATIONS',
                data: queryCategorizations
            })
        ).toEqual(
            {
                queryCategorizations: queryCategorizations
            }
        );
    });

    it('should handle DELETE_QUERY_CATEGORIZATION', () => {
        let queryCategorizationId = 17;
        let oldState = {
            queryCategorizations: [{id: 17}, {id: 18}]
        };
        let newState = {
            queryCategorizations: [{id: 18}]
        };
        expect(
            reducer(oldState, {
                type: 'DELETE_QUERY_CATEGORIZATION',
                data: queryCategorizationId
            })
        ).toEqual(newState);
    });

    it('should handle SAVE_QUERY_CATEGORIZATION', () => {
        let updatedQueryCategorization = {id: 18, code: "newcode"};
        let oldState = {
            queryCategorizations: [{id: 17}, {id: 18, code: "oldcode"}]
        };
        let newState = {
            queryCategorizations: [{id: 17}, {id: 18, code: "newcode"}]
        };
        expect(
            reducer(oldState, {
                type: 'SAVE_QUERY_CATEGORIZATION',
                updatedQueryCategorization: updatedQueryCategorization
            })
        ).toEqual(newState);
    });

    it('should handle CREATE_QUERY_CATEGORIZATION', () => {
        let createdQueryCategorization = {id: 18, code: "created"};
        let oldState = {
            queryCategorizations: [{id: 17}]
        };
        let newState = {
            queryCategorizations: [{id: 17}, {id: 18, code: "created"}]
        };
        expect(
            reducer(oldState, {
                type: 'CREATE_QUERY_CATEGORIZATION',
                createdQueryCategorization: createdQueryCategorization
            })
        ).toEqual(newState);
    });
});