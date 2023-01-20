import {ADD_FAVORITES, DELETE_FAVORITES} from './action.types'

const initialState ={
    myFavorites:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITES:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            };
        
        case DELETE_FAVORITES:
                const filtered = state.myFavorites.filter((id) => {
                    return id !== action.payload
                })
            return{
                ...state,
                myFavorites: filtered
            };

        default:
            return {...state}
    }
}

export default reducer;