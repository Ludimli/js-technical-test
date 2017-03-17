import { connect } from 'react-redux'
import UserList from '../components/UserList'

function hashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

function intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "#" + ("00000".substring(0, 6 - c.length) + c);
}

const getUsers = (filteredUserIds, issue, messages) => {
  let users = new Map();

  // push the topic into the messages
  var msg = messages.map(x => x);
  if (issue !== null && issue.user !== null) {
    msg.push(issue);
  }

  msg.forEach(m => {
    let messageCount = users.get(m.user.id) === undefined ? 1 : users.get(m.user.id).messageCount + 1;
    users.set(m.user.id, {
      id: m.user.id,
      login: m.user.login,
      avatar_url: m.user.avatar_url,
      color: intToRGB(hashCode(m.user.login)),
      isFiltered: typeof(filteredUserIds.find(id => id === m.user.id)) !== 'undefined',
      messageCount
    });
  });
  return Array.from(users.values()).sort((a, b) => b.messageCount - a.messageCount);
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: getUsers(state.toggleFilters.filteredUserIds, state.selectedIssue.issue, state.commentsOnIssue.comments),
  };
}

const Settings = connect(
  mapStateToProps
)(UserList)

export default Settings
