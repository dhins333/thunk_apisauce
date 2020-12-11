import React, { useEffect, useState } from 'react';
import { gqlClient } from '../graphql/request';
import { getCountryDetails as query } from '../graphql/queries/countryDetails';

const CountryDetailsContent = ({code}) => {

    const [countryDetails,setCountryDetails] = useState('Loading');

    useEffect(() => {
        const func = async () => {

            const data = await gqlClient.request(query,{code:code});
            
            setCountryDetails(JSON.stringify(data));
        }
        func();
    },[code])

    return (
        <div className = ' countryDetailsContent '>
            {countryDetails}
        </div>
    )
}

export default CountryDetailsContent;

