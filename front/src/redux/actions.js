import { ADD_FAVORITES, DELETE_FAVORITES, FILTER_FAVORITES, ORDER_FAVORITES, RESET_FAVORITES, } from "./action.types";

export const addFavorites = (char) => {
    return {
        type: ADD_FAVORITES,
        payload: char,
    }
};

export const deleteFavorites = (id) => {
    return {
        type: DELETE_FAVORITES,
        payload: id,
    }
};

export const filterCards = (status) => {
	return {
		type: FILTER_FAVORITES,
		payload: status,
	}
};

export const orderCards = (id) => {
	return {
		type: ORDER_FAVORITES,
		payload: id,
	}
};

export const reset = () => {
	return {
		type: RESET_FAVORITES,
	}
};