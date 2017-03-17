import { connect } from 'react-redux'
import Thread from '../components/Thread'

const getVisibleMessages = (messages, filteredUserIds, ownerId) => {
  return messages
  	.filter(m => typeof(filteredUserIds.find(id => id === m.user.id)) === 'undefined')
  	.map((m) => { return Object.assign({}, m, { isOwner: m.user.id === ownerId })});
}

const mapStateToProps = (state) => {
  let messages = [];
  if (state.commentsOnIssue.comments !== null) {
    messages = state.commentsOnIssue.comments.slice();
  }
  if (state.selectedIssue.issue !== null) {
    messages.unshift(Object.assign({}, state.selectedIssue.issue));
  }

  return {
  	title: state.selectedIssue.issue !== null ? state.selectedIssue.issue.title : '',
  	number: state.selectedIssue.issue !== null ? state.selectedIssue.issue.number : 0,
    messages: state.commentsOnIssue.comments !== null && state.selectedIssue.issue !== null ? 
    	getVisibleMessages(messages, state.toggleFilters.filteredUserIds, state.selectedIssue.issue.user.id) : []
  }
}

const VisibleThread = connect(
  mapStateToProps
)(Thread)

export default VisibleThread