import { SIGN_IN, SIGN_UP, SIGN_OUT } from '../actions/AccountActions';
import { setAccount, setToken, setRefreshToken, removeAccount, removeToken, removeRefreshToken } from '../helpers/account';

const intialState = {
    account: null
}

export default function (state = intialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SIGN_IN:
        case SIGN_UP:
            const response = payload ? payload.data : null;
            const account = response ? response.data : null;
            const metadata = response ? response.metadata : null;

            const token = metadata ? metadata.token : null;
            const refreshToken = metadata ? metadata.refreshToken : null;

            if (account) setAccount(account);
            if (token) setToken(token);
            if (refreshToken) setRefreshToken(refreshToken);

            return { ...state, account };
        case SIGN_OUT: {

            removeAccount();
            removeToken();
            removeRefreshToken();
            return { ...intialState, account: null };
        }

        default:
            return state;
    }
}