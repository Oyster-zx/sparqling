import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import Constants from "../../Constants";
import {deleteQueryCategorization, setQueryToRun} from "../../actions/queryAction"; // You can use any testing library
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('queryActionTest', () => {
    afterEach(() => {
        fetchMock.restore()
    });
    it('creates DELETE_QUERY_CATEGORIZATION when deleting query categorization has been done', () => {
        let queryCategorizationId = 9999;
        fetchMock.deleteOnce(`${Constants.REST_API}/queryCategorization?queryCategorizationId=${queryCategorizationId}`, {
            body: JSON.stringify([]),
            headers: {'content-type': 'application/json'}
        });
        const expectedActions = [
            {
                type: 'DELETE_QUERY_CATEGORIZATION',
                data: queryCategorizationId
            }
        ];
        const store = mockStore({});
        return store.dispatch(deleteQueryCategorization(queryCategorizationId)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    });
    it('creates SET_QUERY_TO_RUN when query to run has been set', () => {
        let queryToRun = "query code";
        const expectedActions = [
            {
                type: 'SET_QUERY_TO_RUN',
                queryToRun: queryToRun
            }
        ];
        const store = mockStore({queryToRun: queryToRun});
        store.dispatch(setQueryToRun(queryToRun));
        expect(store.getActions()).toEqual(expectedActions)
    });
});