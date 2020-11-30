import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducers/reducer'
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)



const rootElement = document.getElementById("root");
ReactDOM.render(
  app,
  rootElement
);
