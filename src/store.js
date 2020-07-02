import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';

import SignInReducer from './screens/SignIn/SignInReducer';
import SignUpReducer from './screens/SignUp/SignUpReducer';

const reducers = combineReducers({
    signIn: SignInReducer,
    signUp: SignUpReducer
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;