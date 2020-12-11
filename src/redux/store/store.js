import { configureStore } from '@reduxjs/toolkit';

// import loadMoreReducer from '../modules/loadmore/reducers/loadMoreReducer';
import loadMoreReducer from '../slices/loadMore';
// import paginationReducer from '../modules/pagination/reducers/paginationReducer';
import paginationReducer from '../slices/pagination';
import countriesReducer from '../slices/country';

const store = configureStore({
    reducer:{
        loadMore:loadMoreReducer,
        pagination:paginationReducer,
        countries:countriesReducer
    },
    devTools:true
})

export default store;