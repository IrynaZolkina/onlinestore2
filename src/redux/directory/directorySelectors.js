import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
export const selectDirectorySections2 = createSelector(
  [selectDirectory],
  (directory) => directory.sections2
);
