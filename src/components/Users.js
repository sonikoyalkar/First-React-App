import React, { Component } from 'react';
import UserService from '../services/UserService';

class Users extends Component {
  state = {
    users: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const users = await UserService.getUsers();
      this.setState({ users, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { users, loading, error } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div>
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;