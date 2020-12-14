import React from 'react';

import LoadMoreContent from '../components/containers/LoadMoreContent';
import BreadCrumbs from '../components/dumbComponents/BreadCrumbs';

const LoadMorePage = () => {

    return(
        <div className = 'loadMorePage'>
            <BreadCrumbs></BreadCrumbs>
            <LoadMoreContent />
        </div>
    )
}

export default LoadMorePage;