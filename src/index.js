import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configurestore'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux'
import {startGetUser} from './actions/userActions'



const store=configureStore()
console.log("inir",store.getState())
store.subscribe(()=>{
  console.log(store.getState())
})
if(localStorage.getItem('authToken'))
{
    store.dispatch(startGetUser())
  
}
const jsx=(
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(
  jsx,
  document.getElementById('root')
);


