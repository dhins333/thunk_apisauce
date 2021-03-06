import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Country from './Country';
import { getCountries } from '../redux/modules/countries/actions/countriesActions';

const CountriesContent = () => {

    const countriesList = useSelector((state) => {
        return state.countries.countriesList
    })

    const dispatch = useDispatch();

    useEffect(() => {
        if(countriesList.length === 0){
            dispatch(getCountries());
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