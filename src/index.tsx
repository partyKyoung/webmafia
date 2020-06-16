import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { connect } from 'socket.io-client';
import { ThemeProvider } from "styled-components";
import { configureStore } from "@reduxjs/toolkit";


import theme from "@/styles/theme";

import rootReducer from "@/modules";

import GlobalStyles from "@/styles/GlobalStyles";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

// saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production'
});

// socket.io 연결
const socket = connect('http://localhost:4000/chat', { path: '/socket.io'});

ReactDOM.render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
