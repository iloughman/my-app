import React from "react";
import ExchangeRates from "./ExchangeRates";
import MonetaryInput from "./MonetaryInput";
import ResultDisplay from "./ResultDisplay";

const App = () => (
    <div className="row mt-5">
        {/*<div className="col-md-4 offset-md-1">*/}
            {/*<h2>Articles</h2>*/}
            {/*<List />*/}
        {/*</div>*/}
        {/*<div className="col-md-4 offset-md-1">*/}
            {/*<h2>Add a new article</h2>*/}
            {/*<Form/>*/}
        {/*</div>*/}
        {/*<div className="col-md-4 offset-md-1">*/}
            {/*<h2>API posts</h2>*/}
            {/*<Post />*/}
        {/*</div>*/}
        <div className="col-md-4 offset-md-1">
            <h2>Exchange Rates</h2>
            <ExchangeRates />
        </div>
        <div className="col-md-4">
            <h2>Conversion</h2>
            <MonetaryInput />
        </div>
        <div>
            <ResultDisplay someProp="this fucking works"/>
        </div>
    </div>
);
export default App;