import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(allReducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
