import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import 'semantic-ui-css/semantic.min.css';

import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './reducers';

const logger = createLogger();
const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, logger),
);

const App = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
