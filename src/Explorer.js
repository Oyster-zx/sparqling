import React, {useEffect} from "react";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {connect} from "react-redux";
import {
    fetchCategories,
    fetchCategorizations,
    selectCategories,
    selectCategorizationId
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
                style={{width: 300}}
                renderInput={params => (
                    <TextField {...params} label="Choose categorization" variant="outlined" fullWidth/>
                )}
                onChange={(event, categorization) => {
                    props.selectCategorizationId(categorization ? categorization.id : null)
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
                options={props.categories}
                onOptionsChange={(categories) => {
                    props.selectCategories(props.selectedCategorizationId, categories);
                }}
                // valueArray={this.state.currentCategory}
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
    selectCategorizationId: (categorizationId) => dispatch(selectCategorizationId(categorizationId)),
    selectCategories: (categorizationId, selectedCategories) => {
        dispatch(selectCategories(selectedCategories));
        dispatch(fetchQueryDocuments(categorizationId, selectedCategories));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
