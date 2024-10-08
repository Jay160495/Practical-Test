import { fromJS } from 'immutable';
import { FETCH_USERS_SUCCESS, ADD_USER, DELETE_USER, EDIT_USER } from '../actions/userActions';

const initialState = fromJS({
    users: [],
});

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return state.set('users', fromJS(action.users));

        case ADD_USER:
            const usersList = state.get('users');
            const newId = usersList.size > 0 ? usersList.last().get('id') + 1 : 1;
            return state.set('users', usersList.push(fromJS({ ...action.user, id: newId })));

        case DELETE_USER:
            let updatedUsers = state.get('users').filter((user) => user.get('id') !== action.id);
            updatedUsers = updatedUsers.map((user, index) => user.set('id', index + 1));
            return state.set('users', updatedUsers);

        case EDIT_USER:
            const editIndex = state.get('users').findIndex((user) => user.get('id') === action.user.id);
            if (editIndex !== -1) {
                const updatedUser = state.get('users').get(editIndex).merge(fromJS(action.user));
                return state.set('users', state.get('users').set(editIndex, updatedUser));
            }
            return state;

        default:
            return state;
    }
};
