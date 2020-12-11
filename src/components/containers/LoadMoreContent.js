import React,{ useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadMoreContentThunk } from '../../redux/slices/loadMore';

const LoadMoreContent = () => {

    const buttonRef = useRef();

    const [content,current] = useSelector((state) => {
        return [state.loadMore.content,state.loadMore.current]
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if(current <= 1){
            dispatch(loadMoreContentThunk(1));
        }
    },[dispatch,current]);

    const loadMoreButton = () => {
        dispatch(loadMoreContentThunk(current));
    }
    
    return(
        <div className = 'loadMoreContent'>
            {content.map((each,index) => {
                return <p key={index}>{each}</p>
            } )}
            <button className = 'loadMoreButton' 
                    onClick={loadMoreButton} 
                    ref={buttonRef}
                    disabled={!(current<=10)}
            >
            Load More
            </button>      
        </div>
    )
}

export default LoadMoreContent;