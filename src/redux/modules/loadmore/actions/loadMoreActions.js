import {LOADMORE} from '../constants/loadMoreConstants';
import api from '../../../utils/api';

export const loadMoreContent = (page) => {
    return(
        async (dispatch) => {
            try{
                const response = await api.get(`/posts/${page}`);
                dispatch({type:LOADMORE.CONTENT,value:response.data});
                dispatch({type:LOADMORE.INC_CURRENT});
            }
            catch(e){
                console.log(e);
            }
        }
    )
}