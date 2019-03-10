import login from './login';
import userList from './userList';
import productList from './productList';
import userCreate from './userCreate';
import productCreate from './productCreate';
import userUpdate from './userUpdate';

import {combineReducers} from 'redux';

const combinedReducer=combineReducers({
    login,
    userList,
    productList,
    userCreate,
    productCreate,
    userUpdate
})

export default combinedReducer;