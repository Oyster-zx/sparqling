import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import Constants from "../../Constants";
import {fetchQueryDocuments} from "../../actions/queryListAction"; // You can use any testing library
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('queryListActionTest', () => {
    afterEach(() => {
        fetchMock.restore()
    });
    it('creates FETCH_QUERY_CATEGORIZATIONS when fetching query categorizations has been done', () => {
        let categorizationId = 1000;
        let categories = [{id:2000}];
        let queryCategorizations = [{id: 9999}, {id: 99999}];
        fetchMock.getOnce(`${Constants.REST_API}/queryCategorizations?categorizationId=${categorizationId}&categoriesIds=${categories.map(category => category.id)}`, {
            body: queryCategorizations,
            headers: {'content-type': 'application/json'}
        });
        const expectedActions = [
            {
                type: "FETCH_QUERY_CATEGORIZATIONS",
                data: queryCategorizations
            }
        ];
        const store = mockStore({});
        return store.dispatch(fetchQueryDocuments(categorizationId, categories)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });
});