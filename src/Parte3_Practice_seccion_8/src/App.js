import { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const DUMMY_USERS = [
  {
    id: 1,
    name: 'test',
    age: 31
  },
  {
    id: 2,
    name: 'test 2',
    age: 11
  }
]

function App() {

  const [usersList, setUsersList] = useState(DUMMY_USERS);

  const AddUserHandler = user =>{
    setUsersList( prevUsersList =>{
      return [user,...prevUsersList]
    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={AddUserHandler}/>
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
