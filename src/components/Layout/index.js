import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from './styles.module.css';

const Layout = (props) => {
  const { history, children } = props;

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>ToDo CRUD</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => history.push('/')}>Home</Nav.Link>
        </Nav>
      </Navbar>
      <div className={styles.mainContainer}>
        {children}
      </div>
    </>
  );
};

export default withRouter(Layout);
