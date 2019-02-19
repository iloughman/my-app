import React, { Component } from "react";
import { connect } from "react-redux";
import { getExchangeRates, setFromRate, setToRate } from "../actions/index";
import ExchangeRatesMenuList from "./ExchangeRatesMenuList";

function mapDispatchToProps(dispatch) {
    return {
        setFromRate: rate => dispatch(setFromRate(rate)),
        setToRate: rate => dispatch(setToRate(rate)),
        getExchangeRates: getExchangeRates()
    };
}

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
        this.props.setFromRate(rate);
    }

    setToRate = (rate) => {
        this.setState({toRate: rate});
        this.props.setToRate(rate);
    }

    render() {
        return (
            <div>
                <ExchangeLabel countryCode={this.state.fromRate.countryCode}/>
                <ExchangeRatesMenuList exchangeRates={this.state.exchangeRates} setRate={this.setFromRate}/>
                <ExchangeLabel countryCode={this.state.toRate.countryCode}/>
                <ExchangeRatesMenuList exchangeRates={this.state.exchangeRates} setRate={this.setToRate} />
            </div>
        );
    }
}

function ExchangeLabel({ countryCode }) {
    return (
        <div>Convert from : {countryCode}</div>
    );
}

export default connect(
    null,
    mapDispatchToProps
)(ExchangeRates)