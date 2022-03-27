import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import store from './store/index'
// import {createStore} from 'redux';
// import toDoReducer from './reducers/Reducer'
// import rootReducer from './store/reducers'

// const store = createStore (toDoReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

