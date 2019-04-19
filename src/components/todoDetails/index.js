import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Page from './page';
import {
  createTodo as createTodoAction,
  updateTodo as updateTodoAction,
  getTodo as getTodoAction,
} from '../../redux/actions/todos';

class TodoDetails extends React.Component {
  componentDidMount() {
    const {
      getTodo,
      match: { params: { id } },
    } = this.props;
    const isNew = id === 'new';

    if (!isNew) {
      getTodo({ _id: id });
    }
  }

  onHandleSubmit = async (data, formikBag) => {
    const {
      history,
      match: { params: { id } },
      createTodo,
      updateTodo,
    } = this.props;
    const isNew = id === 'new';

    if (isNew) {
      await createTodo({ data });
    } else {
      await updateTodo({ _id: id, data });
    }

    formikBag.setSubmitting(false);
    history.push('/');
  }

  render() {
    const {
      match: { params: { id } },
      todo,
    } = this.props;
    const isNew = id === 'new';

    return (
      <Page
        todo={todo}
        isNew={isNew}
        onHandleSubmit={this.onHandleSubmit}
      />
    );
  }
}

TodoDetails.propTypes = {
  createTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  getTodo: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  todo: state.todos.data.find(n => n._id === id),
});

const mapDispatchToProps = {
  createTodo: createTodoAction,
  updateTodo: updateTodoAction,
  getTodo: getTodoAction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodoDetails)
);
