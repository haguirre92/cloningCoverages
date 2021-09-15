import { GET_PRODUCTS, GET_COVERAGES, GET_TERMS, GET_CAUSES, GET_COSTS, GET_LOADER} from "../actions";

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
            case GET_LOADER:
            return {
                ...state,
                loader: payload
            }
        default:
            return state;
    }
}