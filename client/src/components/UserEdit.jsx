import React, { Fragment, useState } from 'react';
import UserAddForm from './UserAddForm';
import { connect } from 'react-redux';
import capitalize from '../utils/capitalize';

const UserEdit = ({ users }) => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState({});
  let userPattern = new RegExp('^' + query);
  return (
    <Fragment>
      <h1 className="list-heading">Edit A User</h1>
      <div className="userlist edit">
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
                      <i
                        className="fas fa-user-edit"
                        onClick={() => {
                          setData({
                            _id:user._id,
                            name: user.name,
                            email: user.email,
                            phone: user.phone,
                            city: user.city,
                            state: user.state,
                            country: user.country,
                            area: user.area,
                          });
                          document.querySelector('.add-user-form').classList.toggle('open');
                        }}
                      ></i>
                    </li>
                  );
              })}
          </ul>
        </div>
      </div>
      <UserAddForm data={data} />
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  users: state.Users.users,
});

export default connect(mapStateToProps, {})(UserEdit);
