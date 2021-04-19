import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import ThemeContext from "../../context/ThemeContext";
import './Header.scss';

const Header = () => {
  const { toggle } = useContext(ThemeContext);
  return (
    <header>
      <h1>User Management App</h1>
                <Form>
                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Switch theme"
                    size="lg"
                    className="theme-switch"
                    onClick={() => toggle()}
                  />
                </Form>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Users List
        </NavLink>
        <NavLink to="/create" className="link" activeClassName="active">
          Create User
        </NavLink>
      </div>
    </header>
  );
};

export default Header;