import React from 'react';
import Header from './Header';
import VariableList from './VariableList';
import Result from './Result';
import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Dumplings',
            description: `How much would it cost to feed every employee in the
                          office dumplings for lunch for a year?`,
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
                <div className="container grid-md">
                    <h2 className="text-center">{this.state.title}</h2>
                    <p>{this.state.description}</p>
                    <img src="https://i.imgur.com/oxot5ra.jpg" className="img-responsive centered" />
                    <div className="divider" />

                    <p>There are about <span class="label label-secondary">10,000</span> <span class="label label-primary">employees</span> in the office <sup><a href="https://google.com">[1]</a></sup>.</p>

                    <p>Every employee wants in on these free dumplings, and on average, they'll eat <span class="label label-secondary">12</span> <span class="label label-primary">dumplings per lunch</span>.</p>

                    <p>There are <span class="label label-secondary">250</span> <span class="label label-primary">working days</span> in the year, and let's assume each employee uses <span class="label label-secondary">15</span> <span class="label label-primary">vacation days</span> and <span class="label label-secondary">3</span> <span class="label label-primary">sick days</span> on average.</p>

                    <p><span class="label label-primary">lunches per person per year</span> = <span class="label label-warning">working days - vacation days - sick days</span> = <span class="label label-secondary">232</span></p>

                    <p>Frozen dumplings cost about <span class="label label-secondary">6</span> <span class="label label-primary">dollars per bag</span> in Chinatown, and there are <span class="label label-secondary">30</span> <span class="label label-primary">dumplings per bag</span>.</p>

                    <p><span class="label label-primary">total cost</span> = <span class="label label-warning">employees x lunches per person per year x dollars per bag</span> = <span class="label label-success">30,000</span></p>

                    <div className="divider" />
                </div>
                { /* <VariableList variables={this.state.variables} />
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
                    variables={this.state.variables} /> */}
                <Footer />
            </div>
        );
    }
}

export default App;
