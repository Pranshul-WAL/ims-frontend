import login from './login';
import userList from './userList';
import productList from './productList';
import userCreate from './userCreate';
import productCreate from './productCreate';
import userUpdate from './userUpdate';
import productUpdate from './productUpdate';
import order from './createOrder';

import {combineReducers} from 'redux';

const combinedReducer=combineReducers({
    login,
    userList,
    productList,
    userCreate,
    productCreate,
    userUpdate,
    productUpdate,
    order
})

export default combinedReducer;