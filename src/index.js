import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './scss/styles.scss';
import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
