import React from 'react';
import Header from './Header';
import VariableList from './VariableList';
import Result from './Result';
import Footer from './Footer';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            variables: [
                {name: 'foo', value: 3},
                {name: 'bar', value: 8.3}
            ],
            expression: '3 + 4'
        };

        this.handleExpressionChange = this.handleExpressionChange.bind(this);
        this.handleAddVariable = this.handleAddVariable.bind(this);
    }

    handleExpressionChange(e) {
        this.setState({
            expression: e.target.value
        });
    }

    handleAddVariable() {
        const newVariables = this.state.variables;
        newVariables.push({
            name: '', value: ''
        });

        this.setState({
            variables: newVariables
        });
    }

    render() {
        return (
            <div>
                <Header />
                <VariableList variables={this.state.variables} />
                <button className="btn btn-primary"
                    onClick={this.handleAddVariable}>
                    Add Variable
                </button>
                <div className="input-group">
                    <span className="input-group-addon">
                        Expression
                    </span>
                    <input type="text" className="form-control"
                        onChange={this.handleExpressionChange} />
                </div>
                <Result expression={this.state.expression}
                    variables={this.state.variables} />
                <Footer />
            </div>
        );
    }
}

export default App;
