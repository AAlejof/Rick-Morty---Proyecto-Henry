import { ADD_FAVORITES, DELETE_FAVORITES, FILTER_FAVORITES, ORDER_FAVORITES, RESET_FAVORITES } from './action.types'

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload],
            };

        case DELETE_FAVORITES:
            const filtered = state.myFavorites.filter((char) => {
                return char.id !== payload
            })
            return {
                ...state,
                myFavorites: filtered,
                allCharacters: filtered,
            };

        case FILTER_FAVORITES:
            const filterCopy = [...state.allCharacters];
            const filter = filterCopy.filter((char) => char.gender === payload);
            return {
                ...state,
                myFavorites: filter,
            };

        case ORDER_FAVORITES:
            const orderCopy = [...state.allCharacters];
            const order = orderCopy.sort((a, b) => {
                if (a.id > b.id) {
                    return 'Ascending' === payload ? 1 : -1;
                }
                if (a.id < b.id) {
                    return 'Descending' === payload ? 1 : -1;
                }
                return 0;
            });
            return {
                ...state,
                myFavorites: order,
            };

            case RESET_FAVORITES:
                return {
                    ...state,
                    myFavorites: [...state.allCharacters],
                };


        default:
            return { ...state }
    }
}

export default rootReducer;