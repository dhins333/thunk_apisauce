import { createSlice } from '@reduxjs/toolkit';

import api from '../utils/api';

const loadMoreSlice = createSlice({
    name:'loadMore',
    initialState:{
        content:[],
        current:1
    },
    reducers:{
        loadMoreContent:(state,{payload}) => {
            state.content = state.content.concat(JSON.stringify(payload))
        },
        incrementCurrent:(state) => {
            state.current = state.current + 1;
        }
    }
})

const { loadMoreContent,incrementCurrent } = loadMoreSlice.actions;

export const loadMoreContentThunk = (page) => {
    return async (dispatch) => {
        try{
            const response = await api.get(`/posts/${page}`);
            dispatch(loadMoreContent(response.data));
            dispatch(incrementCurrent());
        }
        catch(e){
            console.log(e);
        }
    }
}

export default loadMoreSlice.reducer;