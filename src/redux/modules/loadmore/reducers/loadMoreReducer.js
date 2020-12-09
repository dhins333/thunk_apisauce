const loadMoreReducer = (state = {
    content:[],
    current:1
},action) => {
    switch(action.type){
        case 'LOAD_MORE_CONTENT':
            return {...state,content:[...state.content,JSON.stringify(action.value)]}

        case 'INCREMENT_CURRENT':
            return {...state,current:state.current+1}

        default:
            return {...state}
    }
}

export default loadMoreReducer;