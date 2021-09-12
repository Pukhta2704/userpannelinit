const initialState = {
  users: [],
  fetch_users_loading: true,
  add_user_loading: false,
  edit_user_loading: false,
  delete_user_loading: false,
  addError: '',
  editError: '',
};
export default function user_Reducer(state = initialState, action) {
  switch (action.type) {
    case 'fetch_users_loading':
      return { ...state, fetch_users_loading: true };
    case 'fetch_users_success':
      return {
        ...state,
        fetch_users_loading: false,
        users: action.payload.data,
      };
    case 'fetch_users_faliure':
      return { ...state, fetch_users_loading: false };
    case 'add_user_loading':
      return { ...state, add_user_loading: true };
    case 'add_user_success':
      return { ...state, add_user_loading: false, users: [action.payload.data, ...state.users] };
    case 'add_user_faliure':
      return { ...state, add_user_loading: false, addError: action.payload.msg };
    case 'edit_user_loading':
      return { ...state, edit_user_loading: true };
    case 'edit_user_success':
      return {
        ...state,
        edit_user_loading: false,
        users: state.users.map((user) =>
          user._id === action.payload.data._id ? action.payload.data : user,
        ),
      };
    case 'edit_user_faliure':
      return { ...state, edit_user_loading: false, editError: action.payload.msg };
    case 'delete_user_loading':
      return { ...state, delete_user_loading: true };
    case 'delete_user_success':
      return {
        ...state,
        delete_user_loading: false,
        users: state.users.filter((user) => user._id !== action.payload.id),
      };
    case 'delete_user_faliure':
      return { ...state, delete_user_loading: false };
    case 'clear_errors':
      return {
        ...state,
        addError: '',
        editError: '',
      };
    default:
      return state;
  }
}
