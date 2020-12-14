import React from 'react';

import CountriesContent from '../components/containers/CountriesContent';
import BreadCrumbs from '../components/dumbComponents/BreadCrumbs';


const CountriesPage = () => {

    return(
        <div className='countriesPage'>
            <BreadCrumbs></BreadCrumbs>
            <CountriesContent></CountriesContent>
        </div>
    )

}

export default CountriesPage;