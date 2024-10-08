import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USERS, fetchUsersSuccess, fetchUsersFailure } from '../actions/userActions';

function* fetchUsersSaga() {
    try {
        const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
        yield put(fetchUsersSuccess(response.data));
    } catch (error) {
        yield put(fetchUsersFailure(error.message));
    }
}

export function* userSaga() {
    yield takeLatest(FETCH_USERS, fetchUsersSaga);
}
