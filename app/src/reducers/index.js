import data from './data.js'
import { TOGGLE_FILTER } from '../actions/index.js'

const reducer = (state = data, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
    	let filteredUserIds;

    	if (typeof(state.filteredUserIds.find(id => id === action.userId)) === 'undefined') {
    		filteredUserIds = state.filteredUserIds.slice();
        filteredUserIds.push(action.userId);
    	} else {
    		filteredUserIds = state.filteredUserIds.filter((value) => value !== action.userId);
    	}

      return Object.assign({}, state, {
         filteredUserIds: filteredUserIds
      })

    default:
      return state
  }
}

export default reducer

