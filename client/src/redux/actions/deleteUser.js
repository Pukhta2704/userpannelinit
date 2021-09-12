import axios from 'axios';

const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'delete_user_loading' });
    const res = await axios.delete(`/deleteuser/${id}`);
    dispatch({
      type: 'delete_user_success',
      payload: { data: res.data.data, id },
    });
    document.querySelector('.add-user-form').classList.toggle('open');
  } catch (error) {
    dispatch({ type: 'delete_user_faliure', payload: { msg: error.response.data.msg } });
  }
};

export default deleteUser;
