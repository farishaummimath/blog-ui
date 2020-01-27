import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { startGetUsers } from './actions/users'
import { startGetPosts } from './actions/posts'
import { startGetComments } from './actions/comments'


const store = configureStore()
store.subscribe(()=>{
    console.log("SUBSCRIBE",store.getState())
})
console.log(store.getState())
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())
store.dispatch(startGetComments())


const jsx = (
    <Provider store = {store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
