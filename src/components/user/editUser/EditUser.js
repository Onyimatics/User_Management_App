import React from 'react';
import UserForm from '../createUser/UserForm';
import { useParams } from 'react-router-dom';

const EditUser = ({ history, users, setUsers }) => {
  const { id } = useParams();
  // the above line of code is same as the below code
// const { id } = props.match.params;

  const userToEdit = users.find((user) => user.id === id);

  const handleOnSubmit = (user) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers([user, ...filteredUsers]);
    history.push('/');
  };

  return (
    <div>
      <UserForm user={userToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditUser;