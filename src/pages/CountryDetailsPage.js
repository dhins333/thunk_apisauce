import React from 'react';
import { withRouter } from 'react-router-dom';

import CountryDetailsContent from '../components/containers/CountryDetailsContent';
import BreadCrumbs from '../components/dumbComponents/BreadCrumbs';

const CountryDetailsPage = (props) => {

    console.log(props);

    return (
        <div className = 'CountryDetailsPage'>
            <BreadCrumbs></BreadCrumbs>
            <CountryDetailsContent code={props.match.params.code} />
        </div>
    )
}

export default withRouter(CountryDetailsPage);