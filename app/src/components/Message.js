import React, { Component } from 'react';
import Avatar from './Avatar'

// Props contract:
// {
//    body: string,
//	  user: {
//				id: number,
//				login: string,
//				avatar_url: string,
//        isOwner: bool,
//	  },
// }

class Message extends Component {
  render() {
    return (
      <div className={`Message ${this.props.isOwner ? 'owner' : ''}`}>
      	<Avatar {...this.props.user} />
      	<div className="Message-body">
      	  {this.props.body}
      	</div>
      </div>
    );
  }
}

export default Message;
