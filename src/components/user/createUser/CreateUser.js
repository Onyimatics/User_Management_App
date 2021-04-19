import React, { useContext } from 'react';
import UserForm from './UserForm';
import UsersContext from '../../../context/UsersContext';
import './CreateUser.scss';

const CreateUser = ({ history }) => {
  const { users, setUsers } = useContext(UsersContext);

    const handleOnSubmit = (user) => {
      setUsers([user, ...users]);
    history.push('/');
    console.log(user);
  };

  return (
    <React.Fragment>
      <UserForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default CreateUser;