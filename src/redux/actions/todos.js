import { createAction } from 'redux-actions';

export const createTodo = createAction('createTodo');
export const createTodoSuccess = createAction('createTodoSuccess');
export const createTodoFailure = createAction('createTodoFailure');

export const deleteTodo = createAction('deleteTodo');
export const deleteTodoSuccess = createAction('deleteTodoSuccess');
export const deleteTodoFailure = createAction('deleteTodoFailure');

export const updateTodo = createAction('updateTodo');
export const updateTodoSuccess = createAction('updateTodoSuccess');
export const updateTodoFailure = createAction('updateTodoFailure');

export const patchTodo = createAction('patchTodo');
export const patchTodoSuccess = createAction('patchTodoSuccess');
export const patchTodoFailure = createAction('patchTodoFailure');

export const getTodo = createAction('getTodo');
export const getTodoSuccess = createAction('getTodoSuccess');
export const getTodoFailure = createAction('getTodoFailure');

export const getAllTodos = createAction('getAllTodos');
export const getAllTodosSuccess = createAction('getAllTodosSuccess');
export const getAllTodosFailure = createAction('getAllTodosFailure');