import axios from 'axios';

const editUser = (id, name, email, phone, city, state, country, area) => async (dispatch) => {
  try {
    console.log('sitis is edit');
    console.log(id)
    dispatch({ type: 'edit_user_loading' });
    const res = await axios.put(`/updateuser`, {
      _id: id,
      name,
      email,
      phone,
      city,
      state,
      country,
      area,
    });
    dispatch({
      type: 'edit_user_success',
      payload: { data: res.data.data },
    });
    document.querySelector('.add-user-form').classList.toggle('open');
  } catch (error) {
    dispatch({ type: 'edit_user_faliure', payload: { msg: error.response.data.msg } });
  }
};

export default editUser;
