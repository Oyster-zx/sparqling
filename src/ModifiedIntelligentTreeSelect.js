import {IntelligentTreeSelect} from 'intelligent-tree-select'

class ModifiedIntelligentTreeSelect extends IntelligentTreeSelect {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        super.componentDidMount();
        this._addSelectedOption(this.props.valueArray);
    }

    _onOptionCreate(createdOption) {
        this.props.createNewOption("categorization", createdOption);
        super._onOptionCreate(createdOption);
    }

    _addSelectedOption(selectedOption) {
        super._addSelectedOption(selectedOption);
        if (this.props.onOptionsChange) {
            this.props.onOptionsChange(selectedOption);
        }
    }

}

export default ModifiedIntelligentTreeSelect;