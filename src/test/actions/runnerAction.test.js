import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import {deleteQueryResult, setEndpoint} from "../../actions/runnerAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('runnerActionTest', () => {
    afterEach(() => {
        fetchMock.restore()
    });
    it('creates SET_ENDPOINT when endpoint has been entered by user', () => {
        let endpoint = "endpoint";
        const expectedActions = [
            {
                type: 'SET_ENDPOINT',
                endpoint: endpoint
            }
        ];
        const store = mockStore({endpoint: null});
        store.dispatch(setEndpoint(endpoint));
        expect(store.getActions()).toEqual(expectedActions)
    });
    it('creates DELETE_QUERY_RESULT when new query has been run', () => {
        const expectedActions = [
            {
                type: 'DELETE_QUERY_RESULT',
            }
        ];
        const store = mockStore({queryResult: {}});
        store.dispatch(deleteQueryResult());
        expect(store.getActions()).toEqual(expectedActions)
    });
});