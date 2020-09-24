import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory], // array or input selectors required for output
    (directory) => directory.sections
)