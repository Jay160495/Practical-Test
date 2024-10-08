export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const EDIT_USER = 'EDIT_USER';

export const fetchUsers = () => ({
    type: FETCH_USERS
});
export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    users
});
export const fetchUsersFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    error
});

export const addUser = (user) => ({
    type: ADD_USER,
    user
});
export const deleteUser = (id) => ({
    type: DELETE_USER,
    id
});
export const editUser = (user) => ({
    type: EDIT_USER,
    user
});
