import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser], // array or input selectors required for output
    (user) => user.currentUser
)