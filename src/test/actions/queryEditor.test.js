import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import Constants from "../../Constants";
import {createQueryCategorization, updateQueryCategorization} from "../../actions/queryEditorAction"; // You can use any testing library
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('queryEditorActionTest', () => {
    afterEach(() => {
        fetchMock.restore()
    });
    it('creates SAVE_QUERY_CATEGORIZATION when updating query categorization has been done', () => {
        let queryCategorization = {id: 9999};
        fetchMock.putOnce(`${Constants.REST_API}/queryCategorization`, {
            headers: {'content-type': 'application/json'}
        });
        const expectedActions = [
            {
                type: "SAVE_QUERY_CATEGORIZATION",
                updatedQueryCategorization: queryCategorization
            }
        ];
        const store = mockStore({});
        return store.dispatch(updateQueryCategorization(queryCategorization)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });
    it('creates CREATE_QUERY_CATEGORIZATION when updating query categorization has been done', () => {
        let queryCategorization = {id: 9999};
        fetchMock.postOnce(`${Constants.REST_API}/queryCategorization`, {
            body: queryCategorization,
            headers: {'content-type': 'application/json'}
        });
        const expectedActions = [
            {
                type: "CREATE_QUERY_CATEGORIZATION",
                createdQueryCategorization: queryCategorization
            }
        ];
        const store = mockStore({});
        return store.dispatch(createQueryCategorization(queryCategorization)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });
});