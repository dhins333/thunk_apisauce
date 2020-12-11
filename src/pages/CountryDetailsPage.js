import React from 'react';
import CountryDetailsContent from '../components/CountryDetailsContent';
import { withRouter } from 'react-router-dom';

const CountryDetailsPage = ({match:{params:{code}}}) => {

    console.log(code);
    return (
        <div className = 'CountryDetailsPage'>
            <CountryDetailsContent code={code} />
        </div>
    )
}

export default withRouter(CountryDetailsPage);