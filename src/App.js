import React from "react";
import { BrowserRouter as Router, Route ,Switch,Redirect} from "react-router-dom";
import login from './container/loginContainer';
import AdminPage from "./components/adminPage";
import UserPage from "./components/userPage";
import UserCreate from "./container/userCreate";
import UserList from "./container/userList";
import ProductPage from "./components/productPage";
import ProductCreate from './components/productCreate'


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
<<<<<<< HEAD
                  <Route path='/ListProduct' component={ProductList}></Route>
=======
>>>>>>> 2e9fa002419c1e99c66c736d51f69a28ad7fb373
              </Switch>
            </Router>
        )
    }
    
}

export default Main;

