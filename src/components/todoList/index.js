import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Page from './page';
import {
  getAllTodos as getAllTodosAction,
  deleteTodo as deleteTodoAction,
  patchTodo as patchTodoAction,
} from '../../redux/actions/todos';

class TodoList extends React.Component {
  state = {
    status: 'all',
  }

  componentDidMount() {
    const { getAllTodos } = this.props;

    getAllTodos();
  }

  onToggleComplete = (_id, completed) => {
    const { patchTodo } = this.props;

    patchTodo({ _id, data: { completed } });
  }

  onDeleteTodo = (_id) => {
    const { deleteTodo } = this.props;

    deleteTodo({ _id });
  }

  onSetStatus = (status) => this.setState({ status })

  render() {
    const { history, todos: { data, isLoading } } = this.props;
    const { status } = this.state;
    let filteredTodos;

    if (status === 'all') {
      filteredTodos = data;
    } else {
      const target = status === 'completed';

      filteredTodos = data.filter(todo => todo.completed === target);
    }

    return (
      <Page
        goToDetails={id => history.push(`/details/${id}`)}
        todos={filteredTodos}
        isLoading={isLoading}
        status={status}
        onToggleComplete={this.onToggleComplete}
        onDeleteTodo={this.onDeleteTodo}
        onSetStatus={this.onSetStatus}
      />
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  getAllTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  patchTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  getAllTodos: getAllTodosAction,
  deleteTodo: deleteTodoAction,
  patchTodo: patchTodoAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodoList)
);
