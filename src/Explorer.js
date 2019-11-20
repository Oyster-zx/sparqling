import React, {useEffect} from "react";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {connect} from "react-redux";
import {
    fetchCategories,
    fetchCategorizations,
    selectCategories,
    selectCategorization
} from "./actions/explorerAction";
import "intelligent-tree-select/lib/styles.css"
import ModifiedIntelligentTreeSelect from './ModifiedIntelligentTreeSelect'
import {Autocomplete} from '@material-ui/lab';
import {TextField} from "@material-ui/core";
import {fetchQueryDocuments} from "./actions/queriesAction";

export const Explorer = (props) => {

    useEffect(() => {
        props.fetchCategories();
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
                    props.selectCategorization(selectedCategorization)
                }}
            />
            <hr/>
            <ModifiedIntelligentTreeSelect
                name={"main_search"}
                valueKey={"name"}
                labelKey={"name"}
                childrenKey={"subTerms"}
                simpleTreeData={true}
                isMenuOpen={true}
                expanded={true}
                options={props.categories}
                onOptionsChange={(categories) => {
                    if (props.selectedCategorization) {
                        props.selectCategories(props.selectedCategorization.id, categories);
                    }
                }}
                valueArray={props.selectedCategories}
                // createNewOption={this.props.rest.createNewOption}
            />
        </>
    )
};

const mapStateToProps = state => ({
    ...state.explorerReducer
});

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories()),
    fetchCategorizations: () => dispatch(fetchCategorizations()),
    selectCategorization: (selectedCategorization) => dispatch(selectCategorization(selectedCategorization)),
    selectCategories: (categorizationId, selectedCategories) => {
        dispatch(selectCategories(selectedCategories));
        dispatch(fetchQueryDocuments(categorizationId, selectedCategories));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
