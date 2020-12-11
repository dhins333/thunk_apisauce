import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Country from '../dumbComponents/Country';
import { getAllCountriesThunk } from '../../redux/slices/country';

const CountriesContent = () => {

    const countriesList = useSelector((state) => {
        console.log(state);
        return state.countries.countriesList
    })

    const dispatch = useDispatch();

    useEffect(() => {
        if(countriesList.length === 0){
            dispatch(getAllCountriesThunk());
        }
    },[dispatch,countriesList.length])

    const renderCountries = () => {
        if(countriesList.length !== 0){
            return countriesList.map(({name,code},index) => {
                return <Country name = {name} code = {code} key = {index} ></Country>
            })
        }
        else{
            return 'Loading Countries'
        }
    }

    return(
        <div className='countriesContent'>
            {renderCountries()}
        </div>
    )
}

export default CountriesContent;