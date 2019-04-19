import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import todos from './reducers/todos';
import todosSaga from './sagas/todos';

export const createStore = (initialState) => {
  const reducer = combineReducers({
    todos,
  });

  const sagaMiddleware = createSagaMiddleware();
  const store = createReduxStore(reducer, initialState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(todosSaga);

  return store;
};