import { SIGN_IN } from './SignInActions';
import { setAccount, setToken, setRefreshToken } from '../../helpers/account';

const intialState = {
    account: null
}

export default function (state = intialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SIGN_IN:
            const response = payload ? payload.data : null;
            const account = response ? response.data : null;
            const metadata = response ? response.metadata : null;

            const token = metadata ? metadata.token : null;
            const refreshToken = metadata ? metadata.refreshToken : null;

            if (account) setAccount(account);
            if (token) setToken(token);
            if (refreshToken) setRefreshToken(refreshToken);

            return { ...intialState, account };
        default:
            return state;
    }
}