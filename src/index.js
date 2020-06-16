import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import reduxThunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'

import App from './components/App';
import reducers from './reducers'

import 'bootstrap/dist/css/bootstrap.css';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['users'] // which reducer want to store
  };
const pReducer = persistReducer(persistConfig, reducers);

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    pReducer,
    composeEnhacers(applyMiddleware(reduxThunk))
    );

const persistor = persistStore(store);
ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
     document.getElementById('root'));
