import { GET_PRODUCTS, GET_COVERAGES, GET_TERMS } from "../actions";

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
        default:
            return state;
    }
}