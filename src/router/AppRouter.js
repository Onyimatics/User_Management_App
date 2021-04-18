import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/header/Header';
import CreateUser from '../components/user/createUser/CreateUser';
import ListUsers from '../components/user/listUsers/ListUsers';
import EditUser from '../components/user/editUser/EditUser';
import useLocalStorage from '../hooks/useLocalStorage';
import UsersContext from '../context/UsersContext';

const AppRouter = () => {
   const [users, setUsers] = useLocalStorage('users', []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
         <UsersContext.Provider value={{ users, setUsers }}>
          <Switch>
          <Route
              render={(props) => (
                <ListUsers {...props} users={users} setUsers={setUsers} />
              )}
              path="/"
              exact={true}
            />
            <Route
                render={(props) => (
                  <CreateUser {...props} users={users} setUsers={setUsers} />
                )}
                path="/create"
              />
              <Route
              render={(props) => (
                <EditUser {...props} users={users} setUsers={setUsers} /> )}
                path="/edit/:id"
                />
              <Route component={() => <Redirect to="/" />} />
          </Switch>
          </UsersContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;