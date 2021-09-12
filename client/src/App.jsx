import React, { Fragment, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './components/UserList.jsx';
import NavBar from './components/NavBar.jsx';
import UserAdd from './components/UserAdd.jsx';
import UserEdit from './components/UserEdit.jsx';
import { connect } from 'react-redux';
import fetchUsers from './redux/actions/fetchUsers.js';
import Loading from './utils/Loading';

const App = ({ fetchUsers, loading }) => {
  useEffect(() => {
    fetchUsers("");
  }, []);
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact component={loading ? Loading : UserList} />
        <Route path="/UserAdd" exact component={UserAdd} />
        <Route path="/UserEdit" exact component={UserEdit} />
      </Switch>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  loading: state.Users.fetch_users_loading,
});
export default connect(mapStateToProps, { fetchUsers })(App);
