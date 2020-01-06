import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import {
    cleanStore,
    fetchCategories,
    fetchCategorizations,
    selectCategories,
    selectCategorization
} from "../../actions/explorerAction";
import Constants from "../../Constants"; // You can use any testing library
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('explorerActionTest', () => {
    afterEach(() => {
        fetchMock.restore()
    });
    it('creates FETCH_CATEGORIZATIONS when fetching categorizations has been done', () => {
        fetchMock.getOnce(`${Constants.REST_API}/categorizations`, {
            body: JSON.stringify([]),
            headers: {'content-type': 'application/json'}
        });
        const expectedActions = [
            {
                type: 'FETCH_CATEGORIZATIONS',
                data: []
            }
        ];
        const store = mockStore({categorizations: []});
        return store.dispatch(fetchCategorizations()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
    it('creates FETCH_CATEGORIES when fetching categories has been done', () => {
        let categorizationSchemaId = 9999;
        fetchMock.getOnce(`${Constants.REST_API}/categories?categorizationSchemaId=${categorizationSchemaId}`, {
            body: JSON.stringify([]),
            headers: {'content-type': 'application/json'}
        });
        const expectedActions = [
            {
                type: 'FETCH_CATEGORIES',
                data: []
            }
        ];
        const store = mockStore({categories: []});
        return store.dispatch(fetchCategories(categorizationSchemaId)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });
    it('creates SELECT_CATEGORIZATION when categorization has been selected', () => {
        let selectedCategorization = {id: 9999};
        const expectedActions = [
            {
                type: 'SELECT_CATEGORIZATION',
                selectedCategorization: selectedCategorization
            }
        ];
        const store = mockStore({selectedCategorization: {}});
        store.dispatch(selectCategorization(selectedCategorization));
        expect(store.getActions()).toEqual(expectedActions)
    });
    it('creates SELECT_CATEGORIZATION when categorization has been selected', () => {
        let selectedCategorization = {id: 9999};
        const expectedActions = [
            {
                type: 'SELECT_CATEGORIZATION',
                selectedCategorization: selectedCategorization
            }
        ];
        const store = mockStore({selectedCategorization: {}});
        store.dispatch(selectCategorization(selectedCategorization));
        expect(store.getActions()).toEqual(expectedActions)
    })
    it('creates SELECT_CATEGORIZATION when categorization has been selected', () => {
        let selectedCategorization = {id: 9999};
        const expectedActions = [
            {
                type: 'SELECT_CATEGORIZATION',
                selectedCategorization: selectedCategorization
            }
        ];
        const store = mockStore({selectedCategorization: {}});
        store.dispatch(selectCategorization(selectedCategorization));
        expect(store.getActions()).toEqual(expectedActions)
    })
    it('creates SELECT_CATEGORIES when category has been selected', () => {
        let selectedCategories = [{id: 9999}, {id: 99999}];
        const expectedActions = [
            {
                type: 'SELECT_CATEGORIES',
                selectedCategories: selectedCategories
            }
        ];
        const store = mockStore({selectedCategories: {}});
        store.dispatch(selectCategories(selectedCategories));
        expect(store.getActions()).toEqual(expectedActions)
    });
    it('creates CLEAN_STORE when store has been cleaned', () => {
        const expectedActions = [
            {
                type: 'CLEAN_STORE'
            }
        ];
        const store = mockStore({});
        store.dispatch(cleanStore());
        expect(store.getActions()).toEqual(expectedActions)
    });
});