import React from 'react';
import { withRouter } from 'react-router-dom';

import CountryDetailsContent from '../components/containers/CountryDetailsContent';

const CountryDetailsPage = ({match:{params:{code}}}) => {

    return (
        <div className = 'CountryDetailsPage'>
            <CountryDetailsContent code={code} />
        </div>
    )
}

export default withRouter(CountryDetailsPage);