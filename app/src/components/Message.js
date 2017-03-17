import React, { Component } from 'react';
import Avatar from './Avatar'

// Props contract:
// {
//    body: string,
//	  user: {
//				id: number,
//				login: string,
//				avatarUrl: string,
//	  },
// }

class Message extends Component {
  render() {
    return (
      <div className="Message">
      	<Avatar {...this.props.user} />
      	<div className="Message-body">
      	  {this.props.body}
      	</div>
      </div>
    );
  }
}

export default Message;
