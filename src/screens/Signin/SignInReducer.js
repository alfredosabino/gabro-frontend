import { SIGN_IN } from './SignInActions';

const intialState = {
    account: null
}

export default function(state = intialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SIGN_IN:
            return {...intialState, account: {...payload, success: true } };
        default:
            return state;
    }
}