import React from 'react';
import _ from 'lodash';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './ListUsers.scss';

const ListUsers = ({ users, setUsers }) => {
    const history = useHistory();
    const handleRemoveUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const renderHeader = () => {
        let headerElement = ['First Name', 'Last Name', 'Email Address', 'Phone Number', 'Birth Date',
        'Edit', 'Delete']
        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
  return (
    <React.Fragment>
      <div className="user-list">
      <Table striped bordered hover size="sm">
  <thead>
    <tr>{renderHeader()}</tr>
  </thead>
  <tbody>
     {!_.isEmpty(users) ? (
          users.map((user) => {
      return (<tr key={user.id}>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.birthDay}</td>
      <td>
       <button className="edit-btn"
        onClick={() => history.push(`/edit/${user.id}`)}
            ><i
              className="fa fa-pencil"
              aria-hidden="true"
            ></i
            ></button>
      </td>
      <td><button className="delete-btn"
            onClick={() => handleRemoveUser(user.id)}
            ><i
              aria-hidden="true"
              className="fa fa-trash-o"
            ></i
            ></button>
        </td>
    </tr>)
          })
        ) : (
          <tr className="message"><td colSpan="7" align="center">No users available. Please create some users.</td></tr>
        )}
  </tbody>
</Table>
      </div>
    </React.Fragment>
  );
};

export default ListUsers;