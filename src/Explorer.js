import React, {useEffect} from "react";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {connect} from "react-redux";
import {check, expand, fetchCategorization} from "./actions/explorerAction";
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
            valueKey={"@id"}
            labelKey={"http://www.w3.org/2000/01/rdf-schema#label"}
            childrenKey={"subTerm"}
            simpleTreeData={true}
            isMenuOpen={true}
            options={props.nodes}
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
    fetchCategorization: () => dispatch(fetchCategorization())
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
