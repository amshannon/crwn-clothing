import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null
}

// ES6 allows us to set INITIAL_STATE as default value when nothing is passed
const userReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;