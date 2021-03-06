import {GET_GEO,LOADING, CLEAR_GEO } from '../actions/constant'

const initialState = {
    geo: null,
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOADING:
        return {
            ...state,
            loading: true
        }
        case GET_GEO:
        return {
            ...state,
            geo: action.payload,
            loading: false
        }
        case CLEAR_GEO:
            return {
                ...state,
                geo: null
            }
        default:
            return state;
    }
}