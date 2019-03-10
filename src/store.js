import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'
import thunk from 'redux-thunk'
/**
 * import reducers
 */
const store=createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));

export default store;