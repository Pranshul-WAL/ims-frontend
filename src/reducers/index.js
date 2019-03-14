import login from './login';
import userList from './userList';
import productList from './productList';
import userCreate from './userCreate';
import productCreate from './productCreate';
import userUpdate from './userUpdate';
import productUpdate from './productUpdate';
import order from './createOrder';
import listInventory from './listInventory';
import listOrders from './listOrders';
import listReturns from './listReturns';


import {combineReducers} from 'redux';

const combinedReducer=combineReducers({
    login,
    userList,
    productList,
    userCreate,
    productCreate,
    userUpdate,
    productUpdate,
    order,
    listInventory,
    listOrders,
    listReturns,
    
})

export default combinedReducer;