import {IntelligentTreeSelect} from 'intelligent-tree-select'

class ModifiedIntelligentTreeSelect extends IntelligentTreeSelect {

    componentDidMount() {
        super.componentDidMount();
        this._addSelectedOption(this.props.valueArray);
    }

    _addSelectedOption(selectedOption) {
        super._addSelectedOption(selectedOption);
        if (this.props.onOptionsChange) {
            this.props.onOptionsChange(selectedOption);
        }
    }
}

export default ModifiedIntelligentTreeSelect;