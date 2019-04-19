import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Layout from '../Layout';

const TodoListPage = (props) => {
  const {
    goToDetails,
    isLoading,
    todos,
    onDeleteTodo,
    onToggleComplete,
    status,
    onSetStatus,
  } = props;

  return (
    <Layout>
      <Container>
        <Row>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                onChange={e => onSetStatus(e.target.value)}
                value={status}
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="not-completed">Not Completed</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Button variant="primary" onClick={() => goToDetails('new')}>New</Button>
            </Form.Group>
          </Form>
        </Row>

        <Row>
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>Status</th>
                <th>Name</th>
                <th>Title</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todos.length === 0 && isLoading ?
                <tr>
                  <td colSpan={4}>Loading...</td>
                </tr>
                :
                todos.map(todo => (
                  <tr key={todo._id}>
                    <td>
                      <Form.Check
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggleComplete(todo._id, !todo.completed)}
                      />
                    </td>
                    <td>
                      <Button variant="link" onClick={() => goToDetails(todo._id)}>{todo.name}</Button>
                    </td>
                    <td>{todo.title}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => onDeleteTodo(todo._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Row>
      </Container>
    </Layout>
  );
};

TodoListPage.propTypes = {
  status: PropTypes.string.isRequired,
  onSetStatus: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  goToDetails: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
};

export default TodoListPage;
