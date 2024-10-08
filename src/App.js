import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './redux/actions/userActions';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';

function App() {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <UserForm selectedUser={selectedUser} />
      <UserTable onEdit={handleEdit} />
    </div>
  );
}

export default App;

