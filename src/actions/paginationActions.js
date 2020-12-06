import {PAGINATION} from '../constants/paginationConstants';
import api from '../utils/api';

export const paginationContent = () => {
    return async (dispatch) => {
        try{
            const response = await api.get('/posts');
            const data = response.data.splice(0,10).map((each) => {
                return JSON.stringify(each)
            })
            dispatch({type:PAGINATION.CONTENT,value:data});
        }
        catch(e){
            console.log(e);
        }
    }
}

export const incrementPage = (dispatch) => {
    dispatch({type:PAGINATION.CURRENT_INC})
}

export const decrementPage = (dispatch) => {
    dispatch({type:PAGINATION.CURRENT_DEC})
}