let initState = {
    userInfo: { id: null, pwd: null, auth: false },
    product: {},
    selectedProducts: []
};

function reducer(state = initState, action) {

    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                userInfo: action.payload
            };

        case "LOGOUT":
            return {
                ...state,
                userInfo: action.payload
            }

        case "SELECTED":
            return {
                ...state,
                product: action.payload
            }

        case "DESELECTED":
            return {
                ...state,
                product: {}
            }

        case "ADD_CART":
            return {
                ...state,
                selectedProducts: [ ...state.selectedProducts, action.payload ]
            }

        case "REMOVE_CART":
            return {
                ...state,
                selectedProducts: state.selectedProducts.filter(product => product.id !== action.payload)
            }

        case "RESET_CART":
            return {
                ...state,
                selectedProducts: []
            }

        default:
            return { ...state }
    }
}

export default reducer;