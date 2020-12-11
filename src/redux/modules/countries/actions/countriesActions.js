import { COUNTRIES } from '../constants/countriesConstants';
import { gqlClient } from '../../../../graphql/request';
import { getCountries as getCountriesQuery } from '../../../../graphql/queries/countries';

export const getCountries = () => {
    return async (dispatch) => {
        const data = await gqlClient.request( getCountriesQuery);
        dispatch({ type:COUNTRIES.GET_ALL,value:data.countries});
    }
}