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
            this.setFromRate(this.state.exchangeRates[0]);
            this.setToRate(this.state.exchangeRates[1]);
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
                <ExchangeLabel label="from" countryCode={this.state.fromRate.countryCode}/>
                <ExchangeRatesMenuList
                    exchangeRates={this.state.exchangeRates}
                    setRate={this.setFromRate}
                />
                <ExchangeLabel label="to" countryCode={this.state.toRate.countryCode}/>
                <ExchangeRatesMenuList
                    exchangeRates={this.state.exchangeRates}
                    setRate={this.setToRate}
                    someProp="hihi"
                />
            </div>
        );
    }
}

function ExchangeLabel({ countryCode, label }) {
    return (
        <div>Convert {label} : {countryCode}</div>
    );
}

export default connect(
    null,
    mapDispatchToProps
)(ExchangeRates)