import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from "react-router-dom";
import history from './history';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './app'


//////////////////////////////////






const middleware = [thunk];
const initialState = {};
// if(localStorage.getItem('cartItems'))
// initialState.cart={items:JSON.parse(localStorage.getItem('cartItems'))}
const store = createStore(reducers, initialState, applyMiddleware(...middleware));
export default store;
ReactDOM.render
    (
        <Provider store={store}>
    <Router history={history}>
    <App/>
    </Router>
    </Provider>
    , document.querySelector('#root'));
    