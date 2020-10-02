import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null
}

// ES6 allows us to set INITIAL_STATE as default value when nothing is passed
const shopReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
};

export default shopReducer;
