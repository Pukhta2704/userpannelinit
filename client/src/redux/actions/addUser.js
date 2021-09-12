import axios from 'axios';
import history from '../../history';

const addUser = (name, email, phone, city, state, country, area) => async (dispatch) => {
  try {
    dispatch({ type: 'add_user_loading' });
    const res = await axios.post(`/adduser`, { name, email, phone, city, state, country, area });
    dispatch({
      type: 'add_user_success',
      payload: { data: res.data.data },
    });
    history.push('/');
  } catch (error) {
    dispatch({ type: 'add_user_faliure', payload: { msg: error.response.data.msg } });
  }
};

export default addUser;
