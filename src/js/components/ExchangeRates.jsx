import React, { Component } from "react";
import { connect } from "react-redux";
import { getExchangeRates } from "../actions/index";

export class ExchangeRates extends Component {
    constructor() {
        super();
        this.state = {
            exchangeRates: {},
            title: "The title"
        };

    }
    componentDidMount() {
        this.props.getExchangeRates().then(res => {
            console.log("res", res);
            this.setState({exchangeRates: res.rates});
        });
    }
    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <ul>
                    {Object.keys(this.state.exchangeRates).map(el => (
                        <li key={this.state.exchangeRates}>
                            {el}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default connect(
    null,
    { getExchangeRates }
)(ExchangeRates)