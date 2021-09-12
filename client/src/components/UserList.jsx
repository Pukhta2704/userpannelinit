import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import capitalize from '../utils/capitalize.js';

const UserList = ({ users }) => {
  const [query, setQuery] = useState('');
  let userPattern = new RegExp('^' + query);
  return (
    <Fragment>
      <h1 className="list-heading">Users</h1>
      <div className="userlist">
        <div className="search-icon">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search User By Name"
            value={query}
            onChange={(e) => {
              e.target.value == ''
                ? setQuery('')
                : e.target.value[e.target.value.length - 1] === ' '
                ? setQuery(e.target.value)
                : setQuery(capitalize(e.target.value));
              capitalize('abc a');
            }}
          />
        </div>
        <div className="content">
          <ul className="header">
            <li>Name</li>
            <li>Email</li>
            <li>Phone</li>
          </ul>
          <ul className="data">
            {users.length > 0 &&
              users.map((user) => {
                if (user.name.match(userPattern))
                  return (
                    <li key={user._id}>
                      <p>{user.name}</p>
                      <p>{user.email}</p>
                      <p>{user.phone}</p>
                    </li>
                  );
              })}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  users: state.Users.users,
});
export default connect(mapStateToProps, {})(UserList);
