import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchIssue } from '../actions'
import VisibleThread from '../containers/VisibleThread';
import Settings from '../containers/Settings';

class AsyncApp extends Component {

  componentDidMount() {
    const { dispatch, issueUrl } = this.props;
    dispatch(fetchIssue(issueUrl));
  }

  render() {
    const { isFetchingIssue, isFetchingComments, comments } = this.props
    return (
      <div>
        {(isFetchingIssue || isFetchingComments) &&
          <h2>Chargement...</h2>
        }
        {!(isFetchingIssue || isFetchingComments) && comments.length === 0 &&
          <h2>Pas de messages.</h2>
        }
        {comments.length > 0 &&
          <div className="App">
            <Settings />
            <VisibleThread />
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    comments: state.commentsOnIssue.comments,
    isFetchingIssue: state.selectedIssue.isFetchingIssue,
    isFetchingComments: state.commentsOnIssue.isFetchingComments,
  }
}

export default connect(mapStateToProps)(AsyncApp)