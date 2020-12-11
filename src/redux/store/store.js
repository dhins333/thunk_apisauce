import { createStore,compose,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import loadMoreReducer from '../modules/loadmore/reducers/loadMoreReducer';
import paginationReducer from '../modules/pagination/reducers/paginationReducer';
import countriesReducer from '../modules/countries/reducers/countriesReducer';

const store = createStore(combineReducers({
    loadMore:loadMoreReducer,
    pagination:paginationReducer,
    countries:countriesReducer
}),compose(applyMiddleware(thunk), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;