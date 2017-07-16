import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducer';

import styles from './styles/styles.scss';

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
         <App/> 
    </Provider>,
    document.getElementById('appRoot')
)