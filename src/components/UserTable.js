import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../redux/actions/userActions';
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UserTable = ({ onEdit }) => {
    const users = useSelector((state) => state.users.get('users').toJS());
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>City with Zip</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{`${user.address.city}, ${user.address.zipcode}`}</TableCell>
                        <TableCell>
                            <IconButton onClick={() => onEdit(user)} aria-label="edit">
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => handleDelete(user.id)} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default UserTable;
