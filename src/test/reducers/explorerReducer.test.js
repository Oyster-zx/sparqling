import reducer from '../../reducers/explorerReducer'
import expect from 'expect'

describe('explorerReducerTest', () => {
    it('should handle FETCH_CATEGORIZATIONS', () => {
        let categorizations = [{id: 1}, {id: 2}];
        expect(
            reducer([], {
                type: 'FETCH_CATEGORIZATIONS',
                data: categorizations
            })
        ).toEqual(
            {
                categorizations: categorizations
            }
        );
    });

    it('should handle FETCH_CATEGORIES', () => {
        let categories = [{id: 1}, {id: 2}];
        expect(
            reducer([], {
                type: 'FETCH_CATEGORIES',
                data: categories
            })
        ).toEqual(
            {
                categories: categories
            }
        );
    })

    it('should handle SELECT_CATEGORIZATION', () => {
        let selectedCategorization = {id: 1};
        expect(
            reducer([], {
                type: 'SELECT_CATEGORIZATION',
                selectedCategorization: selectedCategorization
            })
        ).toEqual(
            {
                selectedCategorization: selectedCategorization
            }
        );
    })

    it('should handle SELECT_CATEGORIES', () => {
        let selectedCategories = [{id: 1}, {id: 2}];
        expect(
            reducer([], {
                type: 'SELECT_CATEGORIES',
                selectedCategories: selectedCategories
            })
        ).toEqual(
            {
                selectedCategories: selectedCategories
            }
        );
    })
});