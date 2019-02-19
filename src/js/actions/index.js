import { ADD_ARTICLE, SET_FROM_RATE, SET_TO_RATE } from "../constants/action-types";
export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}
export function setFromRate(payload) {
    return { type: SET_FROM_RATE, payload };
}
export function setToRate(payload) {
    return { type: SET_TO_RATE, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}

export function getExchangeRates() {
    return function(dispatch) {
        return fetch("https://api.exchangeratesapi.io/latest")
            .then(response => response.json())
            .then(json => {
                return json;
            });
    }
}