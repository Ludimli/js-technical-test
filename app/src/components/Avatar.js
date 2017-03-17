import React, { Component } from 'react';

// Props contract:
// {
//    id: number
//    login: string
//    avatarUrl: string
// }

class Avatar extends Component {
  render() {	
    return (
      <div className="Avatar">
        <img src={this.props.avatarUrl} alt={`@${this.props.login}`} width="20" height="20" />
      </div>
    );
  }
}

export default Avatar;
