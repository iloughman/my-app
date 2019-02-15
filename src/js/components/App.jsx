import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";
import ExchangeRates from "./ExchangeRates";

const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form/>
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>API posts</h2>
            <Post />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Exchange Rates</h2>
            <ExchangeRates />
        </div>
    </div>
);
export default App;