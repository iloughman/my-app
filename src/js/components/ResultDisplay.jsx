import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {conversionResult: state.conversionResult}
};

const ResultDisplay = (props) => {
    return (
        <div>
            <span>This is the result display - {props.someProp}</span>
            <br/>
            <span>{props.conversionResult}</span>
        </div>
    );
}

export default connect(mapStateToProps)(ResultDisplay);