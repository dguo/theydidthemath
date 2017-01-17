import React, {Component, PropTypes} from 'react';
import {eval as evaluate} from 'mathjs';

class Result extends Component {
    constructor(props) {
        super(props);

        let value;
        try {
            value = evaluate(this.props.expression)
        }
        catch (e) {
            value = null;
        }

        this.state = {value};
    }

    componentWillReceiveProps(nextProps) {
        try {
            this.setState({
                value: evaluate(nextProps.expression)
            });
        }
        catch (e) {}
    }

    render() {
        return (
            <div>{this.state.value}</div>
        );
    }
}

Result.propTypes = {
    expression: PropTypes.string.isRequired,
    variables: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.number
        })
    ).isRequired
}

export default Result;

