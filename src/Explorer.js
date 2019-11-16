import React, {useEffect} from "react";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {connect} from "react-redux";
import {check, expand, fetchCategories} from "./actions/explorerAction";
import "intelligent-tree-select/lib/styles.css"
import ModifiedIntelligentTreeSelect from './ModifiedIntelligentTreeSelect'

export const Explorer = (props) => {

    useEffect(() => {
        props.fetchCategorization();
        console.log('mount it!');
    }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

    return (
        <ModifiedIntelligentTreeSelect
            name={"main_search"}
            valueKey={"name"}
            labelKey={"name"}
            childrenKey={"subTerms"}
            simpleTreeData={true}
            isMenuOpen={true}
            options={props.categories}
            // onOptionsChange={this.readQueryDocuments}
            // valueArray={this.state.currentCategory}

            // createNewOption={this.props.rest.createNewOption}
        />)
};

const mapStateToProps = state => ({
    ...state.explorerReducer
});

const mapDispatchToProps = dispatch => ({
    expandCategory: (expanded) => dispatch(expand(expanded)),
    checkCategory: (checked) => dispatch(check(checked)),
    fetchCategorization: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
