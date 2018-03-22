import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';


const GOT_USERS = 'GOT_USERS';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_USERS:
      return action.users;
      break;
    default:
      return state
  };
};

const reducer = combineReducers({
  users: userReducer
})

const getUsers = () => {
  return axios.get('/api/users')
    .then(res => res.data)
    .then(users =>{
      store.dispatch({
        type: GOT_USERS,
        users: users
      })
    })
}


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
export { getUsers }
