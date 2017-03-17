import { connect } from 'react-redux'
import UserList from '../components/UserList'

/*const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}*/

const getUsers = (filteredUserIds, messages) => {
  let users = new Map();

  messages.forEach(m => {
    let messageCount = users.get(m.user.id) === undefined ? 1 : users.get(m.user.id).messageCount + 1;
    users.set(m.user.id, {
      id: m.user.id,
      login: m.user.login,
      avatarUrl: m.user.avatarUrl,
      color: m.user.color,
      isFiltered: typeof(filteredUserIds.find(id => id === m.user.id)) !== 'undefined',
      messageCount
    });
  });
  return Array.from(users.values()).sort((a, b) => b.messageCount - a.messageCount);
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state.filteredUserIds, state.issue.messages)
  };
}

const Settings = connect(
  mapStateToProps
)(UserList)

export default Settings
