import React, { Component } from "react";
import { connect } from "react-redux";
import { getExchangeRates } from "../actions/index";
import ExchangeRatesMenuList from "./ExchangeRatesMenuList";

export class ExchangeRates extends Component {
    constructor() {
        super();
        this.state = {
            exchangeRates: [],
            fromRate: {},
            toRate: {},
            anchorEl: null
        };
    }

    componentDidMount() {
        this.props.getExchangeRates().then(res => {
            this.setState({exchangeRates: Object.entries(res.rates).map(entry => {
                    return {rate: entry[1], countryCode: entry[0]};
                }
            )});
        });
    }

    setFromRate = (rate) => {
        this.setState({fromRate: rate});
    }

    setToRate = (rate) => {
        this.setState({toRate: rate});
    }

    render() {
        return (
            <div>
                <div>Convert from : {this.state.fromRate.countryCode}</div>
                <ExchangeRatesMenuList exchangeRates={this.state.exchangeRates} setRate={this.setFromRate}/>
                <div> to: {this.state.toRate.countryCode} </div>
                <ExchangeRatesMenuList exchangeRates={this.state.exchangeRates} setRate={this.setToRate} />
            </div>
        );
    }
}

export default connect(
    null,
    { getExchangeRates }
)(ExchangeRates)