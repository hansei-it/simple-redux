import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import rootReducer from './modules';

//const store = createStore(rootReducer);
// Redux Toolkit을 사용하여 스토어 생성
const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
