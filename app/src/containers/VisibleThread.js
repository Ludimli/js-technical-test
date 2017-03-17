import { connect } from 'react-redux'
import Thread from '../components/Thread'

const getVisibleMessages = (messages, filteredUserIds) => {
  return messages.filter(m => typeof(filteredUserIds.find(id => id === m.user.id)) === 'undefined');
}

const mapStateToProps = (state) => {
  return {
  	title: state.selectedIssue.issue !== null ? state.selectedIssue.issue.title : '',
  	number: state.selectedIssue.issue !== null ? state.selectedIssue.issue.number : 0,
    messages: state.commentsOnIssue.comments !== null ? getVisibleMessages(state.commentsOnIssue.comments, state.toggleFilters.filteredUserIds) : []
  }
}

const VisibleThread = connect(
  mapStateToProps
)(Thread)

export default VisibleThread