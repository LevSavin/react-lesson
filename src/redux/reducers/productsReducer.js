import axios from "axios"

const initialState = {
    products: [],
    loading: false,
    error: null,
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                error: null,
                loading: false,
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export const getData = () => {
    return async (dispatch) => {
        dispatch({
            type: 'GET_PRODUCTS_LOADING'
        })
        axios.get(`https:/jsonplaceholder.typicode.com/posts`)
            .then(({data}) => {
                dispatch({
                    type: 'GET_PRODUCTS',
                    payload: data
                })
            })
            .catch(error => {
                console.log(error.message)
                dispatch({
                    type: 'SET_ERROR',
                    payload: error.message,
                })
            });
    };
}