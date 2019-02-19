import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
    return { fromRate: state.fromRate, toRate: state.toRate };
};
const MonetaryInputElement = ({ fromRate, toRate }) => (
    <div>
        <div>{fromRate.rate}</div>
        <div>{toRate.rate}</div>
    </div>
);
const MonetaryInput = connect(mapStateToProps)(MonetaryInputElement);
export default MonetaryInput;