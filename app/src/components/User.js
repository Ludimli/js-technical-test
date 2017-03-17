import React, { Component, PropTypes } from 'react';
import Avatar from './Avatar'

// Props contract:
// {
//    id: number
//    login: string
//    messageCount: number
//		isFiltered: bool
//    isOwner: bool
//    onClick: function
// }

class User extends Component {

  render() {
  	if (!Number.isInteger(this.props.id)
  		|| typeof(this.props.login) !== 'string' || this.props.login.trim() === '' 
  		|| !Number.isInteger(this.props.messageCount)) {return null;}

    return (
      <div className="User">
        <Avatar {...this.props} />
        <div className="User-login" style={{
            textDecoration: this.props.isFiltered ? 'line-through' : 'none'
          }} 
          onClick={e => {
            e.preventDefault();
            this.props.onClick();
          }}>
            {this.props.login} ({this.props.messageCount} message(s))
        </div>
        <div className="User-color" style={{ backgroundColor: this.props.color, width: '20px', height: '20px' }}></div>
      </div>
    );
  }
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  messageCount: PropTypes.number.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default User;
