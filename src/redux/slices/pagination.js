import { createSlice } from '@reduxjs/toolkit';
import api from '../utils/api';

const paginationSlice = createSlice({
    name:'pagination',
    initialState:{
        content:[],
        currentPageNumber:-1
    },
    reducers:{
        getPaginationContent : (state,{payload}) => {
            console.log(payload);
            state.content = payload
        },
        increasePage : (state) => {
            state.currentPageNumber = state.currentPageNumber + 1
        },
        decreasePage : (state) => {
            state.currentPageNumber = state.currentPageNumber - 1
        }
    }
})

export const { getPaginationContent,increasePage,decreasePage } = paginationSlice.actions;

export const getPaginationContentThunk = () => {
    return async (dispatch) => {
        try{
            const response = await api.get('/posts');
            const data = response.data.splice(0,10).map((each) => {
                return JSON.stringify(each)
            })
            dispatch(getPaginationContent(data))
        }
        catch(e){
            console.log(e);
        }
    }
}

export default paginationSlice.reducer;