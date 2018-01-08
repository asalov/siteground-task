import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

const configureStore = () => {
  const middleware = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
  }

  return createStore(reducers, applyMiddleware(...middleware));
};

export default configureStore();
