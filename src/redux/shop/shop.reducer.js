import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

// ES6 allows us to set INITIAL_STATE as default value when nothing is passed
const shopReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;
