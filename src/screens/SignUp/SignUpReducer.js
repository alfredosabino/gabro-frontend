import { SIGN_UP } from './SignUpActions';

const intialState = {
    account: null
};

export default function(state = intialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SIGN_UP:
            return {...intialState, account: {...payload, sucess: true } };
        default:
            return state;
    }
};