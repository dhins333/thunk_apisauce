const countriesReducer = (state = {
    countriesList:[]
},action) => {
    switch(action.type){

        case 'GET_ALL_COUNTRIES':
            return {...state,countriesList:[...state.countriesList,...action.value]}

        default:
            return state;
    }
}

export default countriesReducer;