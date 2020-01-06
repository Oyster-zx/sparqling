import React, {useEffect} from "react";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {connect} from "react-redux";
import {
    cleanStore,
    fetchCategories,
    fetchCategorizations,
    selectCategories,
    selectCategorization
} from "./actions/explorerAction";
import "intelligent-tree-select/lib/styles.css"
import ModifiedIntelligentTreeSelect from './ModifiedIntelligentTreeSelect'
import {Autocomplete} from '@material-ui/lab';
import {TextField} from "@material-ui/core";
import {fetchQueryDocuments} from "./actions/queryListAction";
import AceEditor from "react-ace";

export const Explorer = (props) => {

    useEffect(() => {
        // props.fetchCategories();
        props.fetchCategorizations();
    }, []);

    return (
        <>
            <br/>
            <Autocomplete
                id="categorizationSelector"
                options={props.categorizations}
                getOptionLabel={option => option.categorizationScheme.title}
                defaultValue={props.selectedCategorization}
                renderInput={params => (
                    <TextField {...params} label="Choose categorization" variant="outlined" fullWidth/>
                )}
                onChange={(event, selectedCategorization) => {
                    props.selectCategorization(selectedCategorization);
                    if (selectedCategorization) {
                        props.fetchCategories(selectedCategorization.categorizationScheme.id);
                        props.selectCategories(selectedCategorization.id, []);
                    } else {
                        props.cleanStore();
                        props.fetchCategorizations();
                    }
                }}
            />
            {props.selectedCategorization &&
            <>
                <hr/>
                <ModifiedIntelligentTreeSelect
                    name={"main_search"}
                    valueKey={"name"}
                    labelKey={"name"}
                    childrenKey={"subTerms"}
                    simpleTreeData={true}
                    isMenuOpen={true}
                    expanded={true}
                    showSettings={false}
                    options={props.categories}
                    onOptionsChange={(categories) => {
                        props.selectCategories(props.selectedCategorization.id, categories);
                    }}
                    valueArray={props.selectedCategories}
                />
            </>}
        </>)
};

const mapStateToProps = state => ({
    ...state.explorerReducer
});

const mapDispatchToProps = dispatch => ({
    cleanStore: () => dispatch(cleanStore()),
    fetchCategories: (categorizationSchemaId) => dispatch(fetchCategories(categorizationSchemaId)),
    fetchCategorizations: () => dispatch(fetchCategorizations()),
    selectCategorization: (selectedCategorization) => dispatch(selectCategorization(selectedCategorization)),
    selectCategories: (categorizationId, selectedCategories) => {
        dispatch(selectCategories(selectedCategories));
        var a = performance.now();
        dispatch(fetchQueryDocuments(categorizationId, selectedCategories));
        var b = performance.now();
        console.log('It took ' + (b - a) + ' ms.');
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
