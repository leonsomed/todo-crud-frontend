import { takeEvery, put, call } from 'redux-saga/effects';
import {
  getAllTodos,
  getAllTodosFailure,
  getAllTodosSuccess,

  updateTodo,
  updateTodoFailure,
  updateTodoSuccess,

  patchTodo,
  patchTodoFailure,
  patchTodoSuccess,

  createTodo,
  createTodoFailure,
  createTodoSuccess,

  getTodo,
  getTodoFailure,
  getTodoSuccess,

  deleteTodo,
  deleteTodoFailure,
  deleteTodoSuccess,
} from '../actions/todos';
import api from '../../services/api';

function parseErrorMessage(error) {
  let message;

  if (error.response) {
    message = error.response.data.error.message
  } else {
    message = error.message;
  }

  return message;
}

function* getTodosHanlder(action) {
  try {
    const response = yield call(api.todo.getAll);

    yield put(getAllTodosSuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(getAllTodosFailure(message));
  }
}

function* getTodoHandler(action) {
  try {
    const response = yield call(api.todo.get, action.payload._id);

    yield put(getTodoSuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(getTodoFailure(message));
  }
}

function* updateTodoHanlder(action) {
  try {
    const response = yield call(api.todo.update, action.payload._id, action.payload.data);

    yield put(updateTodoSuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(updateTodoFailure(message));
  }
}

function* createTodoHanlder(action) {
  try {
    const response = yield call(api.todo.create, action.payload.data);

    yield put(createTodoSuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(createTodoFailure(message));
  }
}

function* deleteTodoHanlder(action) {
  try {
    const response = yield call(api.todo.delete, action.payload._id);

    yield put(deleteTodoSuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(deleteTodoFailure(message));
  }
}

function* patchTodoHanlder(action) {
  try {
    const response = yield call(api.todo.patch, action.payload._id, action.payload.data);

    yield put(patchTodoSuccess(response.data.data));
  } catch (error) {
    const message = parseErrorMessage(error);

    yield put(patchTodoFailure(message));
  }
}

export default function* rootSaga() {
  yield takeEvery(getTodo.toString(), getTodoHandler);
  yield takeEvery(getAllTodos.toString(), getTodosHanlder);
  yield takeEvery(createTodo.toString(), createTodoHanlder);
  yield takeEvery(updateTodo.toString(), updateTodoHanlder);
  yield takeEvery(deleteTodo.toString(), deleteTodoHanlder);
  yield takeEvery(patchTodo.toString(), patchTodoHanlder);
};
