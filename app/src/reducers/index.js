import { combineReducers } from 'redux'
import { TOGGLE_FILTER, REQUEST_COMMENTS, RECEIVE_COMMENTS, REQUEST_ISSUE, RECEIVE_ISSUE } from '../actions/index.js'

function toggleFilters(state = { filteredUserIds: [] }, action) {
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

function commentsOnIssue(state = {
  isFetchingComments: false,
  comments: []
}, action) {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return Object.assign({}, state, {
        isFetchingComments: true
      })
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        isFetchingComments: false,
        comments: action.comments,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function selectedIssue(state = {
  isFetchingIssue: false,
  issue: null,
}, action) {
  switch (action.type) {
    case REQUEST_ISSUE:
      return Object.assign({}, state, {
        isFetchingIssue: true
      })
    case RECEIVE_ISSUE:
      return Object.assign({}, state, {
        isFetchingIssue: false,
        issue: action.issue,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  toggleFilters,
  commentsOnIssue,
  selectedIssue,
})

export default rootReducer 

