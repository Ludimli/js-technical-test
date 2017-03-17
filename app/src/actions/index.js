

/*
 * action types
 */
export const TOGGLE_FILTER = 'TOGGLE_FILTER'

/*
 * action creators
 */
export const toggleFilter = (userId) => {
  return {
    type: TOGGLE_FILTER,
    userId: userId,
  };
}

