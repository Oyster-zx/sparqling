import reducer from '../../reducers/runnerReducer'
import expect from 'expect'

describe('explorerReducerTest', () => {
    it('should handle SET_QUERY_TO_RUN', () => {
        let queryToRun = "queryToRun";
        let newState = {
            queryToRun: queryToRun,
            queryResult: undefined
        };
        expect(
            reducer({}, {
                type: 'SET_QUERY_TO_RUN',
                queryToRun: queryToRun,
            })
        ).toEqual(newState);
    });

    it('should handle SET_ENDPOINT', () => {
        let endpoint = "endpoint";
        let newState = {
            endpoint: endpoint
        };
        expect(
            reducer({}, {
                type: 'SET_ENDPOINT',
                endpoint: endpoint,
            })
        ).toEqual(newState);
    });

    it('should handle SET_QUERY_RESULT', () => {
        let mockName = "testName";
        let mockSalary = 13291;
        let rawData = {
            head: {
                vars: ["name", "salary"]
            },
            results: {
                bindings: [{
                    name: {type: "literal", value: mockName},
                    salary: {type: "literal", value: mockSalary}
                }]
            }
        };
        let formattedData = {
            columns: [{label: "name", field: "name", sort: "asc", width: 150},
                {label: "salary", field: "salary", sort: "asc", width: 150}],
            rows: [{name: mockName, salary: mockSalary}]
        };
        let newState = {
            queryResult: formattedData
        };
        expect(
            reducer({}, {
                type: 'SET_QUERY_RESULT',
                data: rawData,
            })
        ).toEqual(newState);
    });

    it('should handle DELETE_QUERY_RESULT', () => {
        let endpoint = "endpoint";
        let oldState = {
            queryResult: {data: "somedata"}
        };
        let newState = {
            queryResult: null
        };
        expect(
            reducer(oldState, {
                type: 'DELETE_QUERY_RESULT'
            })
        ).toEqual(newState);
    });

});