import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig= {
    key: 'root',
    storage,
    // don't need to whitelist (perist) user as is already handled by firebase
    whitelist: [ 'cart' ] 
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer( persistConfig, rootReducer );