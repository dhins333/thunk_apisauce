import { createSlice } from '@reduxjs/toolkit';
import { gqlClient } from '../../graphql/request';
import { getCountries as query } from '../../graphql/queries/countries';

const countrySlice = createSlice({
    name:'countries',
    initialState:{
        countriesList:[]
    },
    reducers:{
        getAllCountries : (state,{payload}) => {
            state.countriesList = payload;
        }
    }
})

const { getAllCountries } = countrySlice.actions;

export const getAllCountriesThunk = () => {
    return async (dispatch) => {
        const data = await gqlClient.request(query);
        dispatch(getAllCountries(data.countries));
    }
}

export default countrySlice.reducer;