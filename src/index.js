import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Login from './container/loginContainer';
import ProductCreate from './container/productCreate';
import * as serviceWorker from './serviceWorker';
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={store}><ProductCreate /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
