const paginationReducer = (state = {
    content:[],
    currentPageNumber:-1
},action) => {
    switch(action.type){
        
        case 'PAGINATION_CONTENT':
            return{...state,content:[...state.content,...action.value]}

        case 'PAGINATION_INCREASE_CURRENT':
            return{...state,currentPageNumber:state.currentPageNumber+1}

        case 'PAGINATION_DECREASE_CURRENT':
            return{...state,currentPageNumber:state.currentPageNumber-1}

        default:
            return {...state}
    }
}

export default paginationReducer;