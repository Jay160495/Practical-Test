import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './reducers/userReducer';
import { userSaga } from './sagas/userSagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    users: userReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(userSaga);

export default store;
