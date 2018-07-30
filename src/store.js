import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, initialState, composedEnhancers);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../src/reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
