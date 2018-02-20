import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

// Import the index reducer and sagas
import IndexReducer from './indexReducer'
import IndexSagas from './indexSagas'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, IndexReducer)

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {

  const middlewares = [
    sagaMiddleware
  ];

  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );

  const store = createStore(
    persistedReducer,
    initialState,
    enhancer
  );

  let persistor = persistStore(store);

  sagaMiddleware.run(IndexSagas);

  return { persistor, store }
}