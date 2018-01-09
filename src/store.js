import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const configureStore = () => {
  const middleware = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger').createLogger();
    middleware.push(logger);
  }

  return createStore(
    reducers,
    applyMiddleware(...middleware)
  );
};

export default configureStore();
