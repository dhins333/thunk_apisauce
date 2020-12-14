import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { gqlClient } from '../../graphql/utils/request';
import { getCountryDetails as query } from '../../graphql/queries/countryDetails';

const CountryDetailsContent = (props) => {

    const {
        code
    } = props

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

CountryDetailsContent.propTypes = {
    code:PropTypes.string
}

export default CountryDetailsContent;

