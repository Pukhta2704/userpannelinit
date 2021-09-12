import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import addUser from '../redux/actions/addUser';
import clear_errors from '../redux/actions/clear_errors';
import deleteUser from '../redux/actions/deleteUser';
import editUser from '../redux/actions/editUser';

const UserAddForm = ({
  data,
  editError,
  addError,
  editUserLoading,
  addUserLoading,
  deleteUserLoading,
  addUser,
  editUser,
  clear_errors,
  deleteUser,
}) => {
  if (data !== undefined)
    useEffect(() => {
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setCity(data.city);
      setState(data.state);
      setCountry(data.country);
      setArea(data.area);
    }, [data]);
  useEffect(() => {
    setTimeout(() => {
      clear_errors();
    }, 4000);
  }, [addError, editError]);
  const location = useLocation().pathname;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [area, setArea] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (location !== '/UserEdit') addUser(name, email, phone, city, state, country, area);
    else editUser(data._id, name, email, phone, city, state, country, area);
  };
  return (
    <Fragment>
      {location !== '/UserEdit' && <h1 className="list-heading">Add New User</h1>}
      <div className={location === '/UserEdit' ? 'add-user-form edit' : 'add-user-form'}>
        {location === '/UserEdit' && (
          <Fragment>
            <button
              disabled={deleteUserLoading ? true : false}
              onClick={() => deleteUser(data._id)}
            >
              {deleteUserLoading ? '........' : 'Delete User'}
            </button>
            <i
              className="fas fa-times fa-2x"
              onClick={() => {
                document.querySelector('.add-user-form').classList.toggle('open');
              }}
            ></i>
          </Fragment>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Name">Name</label>
            <br />
            <input
              required={true}
              value={name}
              type="text"
              name=""
              id="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <br />
            <input
              required={true}
              value={email}
              type="email"
              name=""
              id="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Phone">Phone</label>
            <br />
            <input
              required={true}
              value={phone}
              type="number"
              name=""
              id="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="City">City</label>
            <br />
            <input
              required={true}
              value={city}
              type="text"
              name=""
              id="City"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="State">State</label>
            <br />
            <input
              required={true}
              value={state}
              type="text"
              name=""
              id="State"
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Country">Country</label>
            <br />
            <input
              required={true}
              value={country}
              type="text"
              name=""
              id="Country"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Area">Area</label>
            <br />
            <input
              required={true}
              value={area}
              type="text"
              name=""
              id="Area"
              onChange={(e) => setArea(e.target.value)}
            />
            <p>{addError + editError}</p>
          </div>
          <button type="submit" disabled={addUserLoading || editUserLoading ? true : false}>
            {addUserLoading || editUserLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  addUserLoading: state.Users.add_user_loading,
  editUserLoading: state.Users.edit_user_loading,
  deleteUserLoading: state.Users.delete_user_loading,
  addError: state.Users.addError,
  editError: state.Users.editError,
});
export default connect(mapStateToProps, { addUser, editUser, deleteUser, clear_errors })(
  UserAddForm,
);
