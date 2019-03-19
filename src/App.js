import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import login from './container/loginContainer';
import AdminPage from "./components/adminPage";
import UserPage from "./components/userPage";
import UserCreate from "./container/users/userCreate";
import UserList from "./container/users/userList";
import ProductPage from "./components/productPage";
import ProductCreate from './container/products/productCreate';
import ProductList from "./container/products/productList";
import ProductUpdate from './container/products/productUpdate';
import UserUpdate from './container/users/userUpdate';
// import listOrders from './container/listOrders';
// import ListOrders from './container/listOrders';
import './App.css';
import OrderCreate from './container/orders/createOrder';
import orders from './container/orders/listOrders';
import CreateOrderMult from './container/orders/createMultorder';
import listReturns from './container/listReturns';
import listInventory from './container/listInventory';
import Orders from './container/orders/orders';
import listItems from './container/products/listItems';
import Multiple from './container/orders/mulltiple';


class Main extends React.Component {

    render() {
        return (
            <Router>
              <Switch>
                  <Route path='/login' component={login}></Route>
                  <Route exact path='/' render={() => {
                      return <Redirect to='/login' />
                  }} />
                   <Route path ='/admin' component={AdminPage}></Route>
                  <Route path ='/enduser' component={UserPage}></Route>
                  <Route path='/add' component={UserCreate}></Route>
                  <Route path='/list' component={UserList}></Route>
                  <Route path='/product' component={ProductPage}></Route>
                  <Route path='/addProduct' component={ProductCreate}></Route>
                  <Route path='/listProduct' component={ProductList}></Route>
                  <Route path='/updateUser/:userId' component={UserUpdate}></Route>
                  <Route path='/updateProduct/:productId' component={ProductUpdate}></Route>
                  <Route path='/addOrder' component={OrderCreate}></Route>
                  <Route path='/listOrder' component={orders}></Route>
                  <Route path='/listmult' component={CreateOrderMult}></Route>
                  <Route path='/listReturns' component={listReturns}></Route> 
                  <Route path='/listInventory' component={listInventory}></Route>
                  <Route path='/Orders' component={Orders}></Route>
                  <Route path='/listItems/:id' component={listItems}></Route>
                  <Route path='/multiple' component={Multiple}></Route>
              </Switch>
            </Router>
                )
            }
            
        }
        
        export default Main;
        
