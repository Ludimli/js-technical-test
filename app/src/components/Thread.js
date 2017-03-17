import React, { Component } from 'react';
import Message from './Message.js'

// Props contract:
// {
//    title: string
//    messages: Array<Message>
// }

class Thread extends Component {
  render() {
    let messages = [];
    if (this.props.messages != null && Array.isArray(this.props.messages)) {
      messages = this.props.messages.map((message, index) => {
        return <Message {...message} key={index} />;
      });
    }

    return (
      <div className="Thread">
          <h2>{this.props.title}</h2>
          <div className="Thread-messages">
            {messages}
          </div>
      </div>
    );
  }
}

export default Thread;
