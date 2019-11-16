import React, {useEffect} from "react";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {connect} from "react-redux";
import {fetchCategories, fetchCategorizations, setCategorizationId} from "./actions/explorerAction";
import "intelligent-tree-select/lib/styles.css"
import ModifiedIntelligentTreeSelect from './ModifiedIntelligentTreeSelect'
import ReactAutocomplete from "react-autocomplete";

export const Explorer = (props) => {

    useEffect(() => {
        props.fetchCategories();
        props.fetchCategorizations();
    }, []);

    return (
        <>
            <br/>
            <ReactAutocomplete
                items={props.categorizations}
                shouldItemRender={() => true}
                getItemValue={item => item.categorizationScheme.title}
                renderItem={(item, highlighted) =>
                    <div key={item.categorizationScheme.title}
                         style={{backgroundColor: highlighted ? '#eee' : 'transparent'}}>
                        {item.categorizationScheme.title}
                    </div>
                }
                // value={}
                // onSelect={async (categorization) => {
                //     console.log(categorization);
                // }}
            />
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
    setCategorizationId: () => dispatch(setCategorizationId())
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
