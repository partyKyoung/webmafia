import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import rootReducer from 'redux/reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './scss/styles.scss';
import './index.scss';

const store = createStore(rootReducer);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>, document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    // 변화가 발생 시 해당 모듈 및 하위 모듈 업데이트 허용
    const NextApp = require('./App').default;

    render(NextApp);
  });
}

registerServiceWorker();