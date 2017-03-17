import fetch from 'isomorphic-fetch'

/*
 * action types
 */
export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const REQUEST_ISSUE = 'REQUEST_ISSUE'
export const RECEIVE_ISSUE = 'RECEIVE_ISSUE'

/*
 * action creators
 */
export const toggleFilter = (userId) => {
  return {
    type: TOGGLE_FILTER,
    userId: userId,
  };
}

function requestIssue(issueUrl) {
  return {
    type: REQUEST_ISSUE,
    issueUrl,
  }
}

function receiveIssue(issueUrl, json) {
  return {
    type: RECEIVE_ISSUE,
    issueUrl,
    issue: json,
    receivedAt: Date.now()
  }
};

function requestComments(issueUrl) {
  return {
    type: REQUEST_COMMENTS,
    issueUrl,
  }
};

function receiveComments(issueUrl, json) {
  return {
    type: RECEIVE_COMMENTS,
    issueUrl,
    comments: json,
    receivedAt: Date.now()
  }
};

function fetchComments(issueUrl) {
  return (dispatch) => {
    dispatch(requestComments(issueUrl))

    return fetch(`https://api.github.com/repos/${issueUrl}/comments`)
      .then(response => response.json())
      .then(json =>

        dispatch(receiveComments(issueUrl, json))
      )
  }
}

export function fetchIssue(issueUrl) {
  return (dispatch) => {
    dispatch(requestIssue(issueUrl))

    return fetch(`https://api.github.com/repos/${issueUrl}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveIssue(issueUrl, json))
      )
      .then(
        dispatch(fetchComments(issueUrl))
      )
  }
}
