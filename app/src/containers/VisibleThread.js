import { connect } from 'react-redux'
import Thread from '../components/Thread'

const getVisibleMessages = (messages, filteredUserIds) => {
  return messages.filter(m => typeof(filteredUserIds.find(id => id === m.user.id)) === 'undefined');
}

const mapStateToProps = (state) => {
  return {
    messages: getVisibleMessages(state.issue.messages, state.filteredUserIds)
  }
}

const VisibleThread = connect(
  mapStateToProps
)(Thread)

export default VisibleThread