import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import TodoList from './components/todoList';
import TodoDetails from './components/todoDetails';
import { createStore } from './redux/store';

const root = (
  <Provider store={createStore()}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/details/:id" component={TodoDetails} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
