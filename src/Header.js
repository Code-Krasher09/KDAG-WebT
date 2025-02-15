import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";

function Header({ setLoggedInUsername, setSearchQuery }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement login functionality here
    console.log("Logging in with", username, password);
    setLoggedIn(true);
    setLoggedInUsername(username);
    setShow(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setLoggedInUsername("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    setSearchQuery(query);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://i.postimg.cc/9fyrVXFD/logo-forum-site.png"
              alt="Logo"
              height="60"
            />
          </a>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2 search-input"
              type="search"
              name="search"
              placeholder="Search..."
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          {loggedIn ? (
            <Dropdown>
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                {username}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Button className="btn btn-light" onClick={handleShow}>
              Login
            </Button>
          )}
        </div>
      </nav>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-danger text-white">
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-3"
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-3"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-danger text-white">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
