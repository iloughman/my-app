import { ADD_ARTICLE, SET_FROM_RATE, SET_TO_RATE } from "../constants/action-types";
const initialState = {
    articles: [],
    errorMessage: "",
    remoteArticles: [],
    fromRate: {},
    toRate: {}
};
function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }
    if (action.type === SET_FROM_RATE) {
        return Object.assign({}, state, {
            fromRate: action.payload
        });
    }
    if (action.type === SET_TO_RATE) {
        return Object.assign({}, state, {
            toRate: action.payload
        });
    }
    return state;
}
export default rootReducer;