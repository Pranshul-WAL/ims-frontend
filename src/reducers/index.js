import login from './login';
import userList from './users/userList';
import productList from './products/productList';
import userCreate from './users/userCreate';
import productCreate from './products/productCreate';
import userUpdate from './users/userUpdate';
import productUpdate from './products/productUpdate';
import order from './orders/createOrder';
import listInventory from './listInventory';
import listOrders from './orders/listOrders';
import listReturns from './listReturns';
import CreateMultOrder from './orders/createMultorder';
import orders from './orders/orders';
import listItems from './listItems';
import multiple from './orders/mulltiple';


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
    CreateMultOrder,
    orders,
    listItems,
    multiple
    
})

export default combinedReducer;