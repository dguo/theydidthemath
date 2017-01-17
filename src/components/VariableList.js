import React, {Component, PropTypes} from 'react';

class Variable extends Component {
    render() {
        return (
            <div>
                <div className="input-group">
                    <span className="input-group-addon">
                        Variable
                    </span>
                    <input type="text" className="form-control"
                        value={this.props.name} />
                    <span className="input-group-addon">
                        Value
                    </span>
                    <input type="text" className="form-control"
                        value={this.props.value} />
                    <span className="input-group-btn">
                        <button className="btn btn-danger" type="button">
                            {'\u2716'}
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

class VariableList extends Component {
    render() {
        return (
            <div>
                {this.props.variables.map((variable, index) => {
                    return (
                        <Variable key={index} name={variable.name}
                            value={variable.value} />
                    );
                })}
            </div>
        );
    }
}

export default VariableList;

