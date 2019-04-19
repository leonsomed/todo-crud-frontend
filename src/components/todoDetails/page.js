import React from 'react';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Formik, ErrorMessage } from 'formik';
import Layout from '../Layout';

const schema = yup.object({
  name: yup.string().required(),
  title: yup.string().required(),
  completed: yup.bool().required(),
});

const TodoDetailsPage = (props) => {
  const {
    todo,
    isNew,
    onHandleSubmit,
  } = props;

  return (
    <Layout>
      <Container>
        <Row>
          {!todo ?
            <div>Loading...</div>
            :
            <Formik
              initialValues={todo}
              validationSchema={schema}
              onSubmit={onHandleSubmit}
              render={(fProps) => {
                const {
                  isSubmitting,
                  isValid,
                  handleSubmit,
                  handleBlur,
                  handleChange,
                  values,
                } = fProps;

                return (
                  <Form>
                    <Form.Group controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={values.name}
                        onChange={handleChange('name')}
                        onBlur={handleBlur('name')}
                      />
                      <ErrorMessage name="name">
                        {msg => <Alert variant="danger">{msg}</Alert>}
                      </ErrorMessage>
                    </Form.Group>

                    <Form.Group controlId="title">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={values.title}
                        onChange={handleChange('title')}
                        onBlur={handleBlur('title')}
                      />
                      <ErrorMessage name="title">
                        {msg => <Alert variant="danger">{msg}</Alert>}
                      </ErrorMessage>
                    </Form.Group>

                    <Form.Group controlId="completed">
                      <Form.Label>Is Completed?</Form.Label>
                      <Form.Control
                        type="checkbox"
                        value={values.completed}
                        onChange={handleChange('completed')}
                        onBlur={handleBlur('completed')}
                      />
                      <ErrorMessage name="completed">
                        {msg => <Alert variant="danger">{msg}</Alert>}
                      </ErrorMessage>
                    </Form.Group>

                    <Form.Group controlId="callToAction">
                      <Button
                        variant="primary"
                        disabled={isSubmitting || !isValid}
                        onClick={handleSubmit}
                      >
                        {isNew ? 'Create' : 'Save'}
                      </Button>
                    </Form.Group>
                  </Form>
                );
              }}
            />
          }
        </Row>
      </Container>
    </Layout>
  );
};

TodoDetailsPage.defaultProps = {
  todo: {
    name: '',
    title: '',
    completed: false,
  },
};

TodoDetailsPage.propTypes = {
  isNew: PropTypes.bool.isRequired,
  todo: PropTypes.objectOf(PropTypes.any),
};

export default TodoDetailsPage;
