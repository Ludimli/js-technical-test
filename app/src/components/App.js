import React, { Component } from 'react';
import VisibleThread from '../containers/VisibleThread';
import Settings from '../containers/Settings';

// Props contract:
// {
//    initialState: AppState
// }

// AppState
// {
//    filteredUserIds: Array<User>
//    issue: Issue
// }

// User
// {
//    id: number
//    login: string
//    messages_count: number
//    isFiltered: bool
// }

// Issue
// {
//    id: number
//    title: string
//    body: string
//    user: User
//    messages: Array<Message>
// }

// Message
// {
//    id: number
//    body: string
//    user: User
// }

class App extends Component {

  render() {
    return (
      <div className="App">
        <Settings />
        <VisibleThread />
      </div>
    );
  }
}

export default App;
