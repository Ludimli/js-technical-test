import React, { Component } from 'react';

// Props contract:
// {
//    id: number
//    login: string
//    avatar_url: string
// }

class Avatar extends Component {
  render() {	
    return (
      <div className="Avatar">
        <img src={this.props.avatar_url} alt={`@${this.props.login}`} width="20" height="20" />
      </div>
    );
  }
}

export default Avatar;
