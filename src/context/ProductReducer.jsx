import { GET_PRODUCTS, GET_COVERAGES, GET_TERMS, GET_CAUSES, GET_COSTS } from "../actions";

export default (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case GET_COVERAGES:
            return {
                ...state,
                productSelected: payload
            }
        case GET_TERMS:
            return {
                ...state,
                terms: payload
            }
        case GET_CAUSES:
            return {
                ...state,
                causes: payload
            }
        case GET_COSTS:
            return {
                ...state,
                costs: payload
            }
        default:
            return state;
    }
}