import React from "react";
import { BrowserRouter as Router, Route ,Switch,Redirect} from "react-router-dom";
import login from './container/loginContainer';
import AdminPage from "./components/adminPage";
import UserPage from "./components/userPage";
import UserCreate from "./container/userCreate";
import UserList from "./container/userList";
import ProductPage from "./components/productPage";
import ProductCreate from './container/productCreate';
import ListProducts  from "./container/productList";
import ProductUpdate from "./container/productUpdate";


class Main extends React.Component{

    render(){
        return(
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
                  <Route path='/listProduct' component={ListProducts}></Route>
                  <Route path='/update' component={ProductUpdate}></Route>
              </Switch>
            </Router>
        )
    }
    
}

export default Main;

