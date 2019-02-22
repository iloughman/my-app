import React, { Component } from "react";
import { connect } from "react-redux";
import { setConversionResult } from "../actions/index"

const mapStateToProps = state => {
    return {
        fromRate: state.fromRate,
        toRate: state.toRate,
        conversionResult: state.conversionResult
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setConversionResult: conversionResult => dispatch(setConversionResult(conversionResult))
    }
}
export class MonetaryInputElement extends Component {
    constructor() {
        super();
        this.state = {
            value: undefined
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.props.setConversionResult(event.target.value);
    }

    render() {
        return (
            <div>
                <div>
                    <label>Enter a value in {this.props.fromRate.countryCode}:</label>
                    <input type="number" value={this.state.value} onChange={this.handleChange}/>
                </div>
                <div>
                    Value in {this.props.toRate.countryCode}:
                    {this.state.value * (this.props.toRate.rate/this.props.fromRate.rate)}
                    </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonetaryInputElement)