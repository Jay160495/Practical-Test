import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editUser } from '../redux/actions/userActions';
import { Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../App.css';

const UserForm = ({ selectedUser }) => {
    const [user, setUser] = useState({ name: '', email: '', phone: '', address: { city: '', zipcode: '' } });
    const users = useSelector((state) => state.users.users || []);

    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedUser) {
            setUser(selectedUser);
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'city' || name === 'zipcode') {
            setUser((prev) => ({
                ...prev,
                address: {
                    ...prev.address,
                    [name]: value,
                },
            }));
        } else {
            setUser((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.id) {
            dispatch(editUser(user));
        } else {
            const nextId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
            dispatch(addUser({ ...user, id: nextId }));
        }
        setUser({ name: '', email: '', phone: '', address: { city: '', zipcode: '' } });
    };

    return (
        <form onSubmit={handleSubmit} className='users-data'>
            <TextField label="Name" name="name" value={user.name} onChange={handleChange} />
            <TextField label="Email" name="email" value={user.email} onChange={handleChange} />
            <TextField label="Phone" name="phone" value={user.phone} onChange={handleChange} />
            <TextField label="City" name="city" value={user.address.city} onChange={handleChange} />
            <TextField label="Zipcode" name="zipcode" value={user.address.zipcode} onChange={handleChange} />
            <Button type="submit" startIcon={<AddIcon />}>
                {user.id ? 'Edit User' : 'Add User'}
            </Button>
        </form>
    );
};

export default UserForm;
