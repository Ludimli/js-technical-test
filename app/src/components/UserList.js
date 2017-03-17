import React, { Component } from 'react';
import FilterUser from '../containers/FilterUser'
import PieChart from 'react-simple-pie-chart';

// Props contract:
// {
//    users: Array<User>
// }

// User
// {
//    id: number
//    login: string
//    color: string
//    messageCount: number
// }

class UserList extends Component {
  renderPieChart() {
    const slices = this.props.users.filter(u => !u.isFiltered).map((u) => { return { value: u.messageCount, color: u.color }});
    if (slices.length === 0) {
      return null;
    }
    return (
      <div>
        <h1>Qui est le plus bavard ?</h1>
        <PieChart
          slices={slices}
        />
      </div>
    );
  }

  renderUserFilters() {
    let userFilters = [];
    if (this.props.users != null && Array.isArray(this.props.users)) {
      userFilters = this.props.users.map((user, index) => {
        return <FilterUser {...user} key={index} />;
      });
    }

    return (
      <div className="UserList-filters">{userFilters}</div>
    );
  }

  render() {
    return (
      <div className="UserList">
        {this.renderPieChart()}
        {this.renderUserFilters()}
      </div>
    );
  }
}

export default UserList;
