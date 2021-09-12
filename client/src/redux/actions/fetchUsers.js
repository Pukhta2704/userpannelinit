import axios from 'axios';

const fetchUsers = (query) => async (dispatch) => {
  try {
    dispatch({ type: 'fetch_users_loading' });
    const res = await axios.get(`/getuser/?query=${query}`);
    dispatch({
      type: 'fetch_users_success',
      payload: { data: res.data.data },
    });
  } catch (error) {
    dispatch({ type: 'fetch_users_faliure' });
  }
};

export default fetchUsers;
