import React from 'react';

import PaginationContent from '../components/containers/PaginationContent';
import BreadCrumbs from '../components/dumbComponents/BreadCrumbs';


const PaginationPage = () => {
    return(
        <div className='paginationPage'>
            <BreadCrumbs></BreadCrumbs>
            <PaginationContent/>
        </div>
    )
}

export default PaginationPage;