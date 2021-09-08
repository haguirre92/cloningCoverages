import { GET_PRODUCTS, GET_COVERAGES } from "../actions";

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
        default:
            return state;
    }
}