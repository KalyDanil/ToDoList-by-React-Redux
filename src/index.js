import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import toDoReducer from './reducers/Reducer'

const store = createStore (toDoReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

