'use strict';

import React, { Component } from 'react';
import './styles/Message.css';

// Props contract:
// {
//    body: string,
//	  user: {
//				id: number,
//				login: string,
//				avatar_url: string,
//	  },
// }

class Message extends Component {

  renderAvatar() {
  	if (this.props.user == null) return;
  	return (
  	  <div className="Message-avatar">
	    	<img src={this.props.user.avatar_url} alt={`@${this.props.user.login}`} width="20" height="20" />
	  	</div>
  	);
  }

  render() {	
    return (
      <div className="Message">
      	{this.renderAvatar()}
      	<div className="Message-body">
      	  {this.props.body}
      	</div>
      </div>
    );
  }
}

export default Message;
