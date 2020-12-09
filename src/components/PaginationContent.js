import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { paginationContent,incrementPage,decrementPage } from '../redux/modules/pagination/actions/paginationActions';

const PaginationContent = () => {

    const [content,currentPageNumber] = useSelector((state) => {
        return [state.pagination.content,state.pagination.currentPageNumber];
    })

    const dispatch = useDispatch();

    useEffect(() => {
        if(content.length === 0){
            dispatch(paginationContent());
            incrementPage(dispatch);
        }
    },[dispatch,content])

    const handlePageChange = (e) => {
        if(e.target.className === 'paginationNavLeft'){
            decrementPage(dispatch);
        }
        else{
            incrementPage(dispatch);
        }
    }

    return(
        <div className = 'paginationContent'>
            {content[currentPageNumber]}
            
           <div className='paginationNav'>
               <button  className='paginationNavLeft' 
                        onClick={handlePageChange}
                        disabled={currentPageNumber<=0}
               >
                Prev
               </button>

                <p>Page Number:{currentPageNumber+1}</p>

               <button  className='paginationNavRight' 
                        onClick={handlePageChange}
                        disabled={currentPageNumber>=9}
                >
                Next
               </button>

            </div> 
            
        </div>
    )
}

export default PaginationContent;