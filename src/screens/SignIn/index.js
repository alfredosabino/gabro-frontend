import React from 'react';
import { connect } from 'react-redux';
import { signIn } from './SignInActions';

const SignIn = (props) => {
    const { signIn } = props;

    const submitHandler = (e) => {
        e.preventDefault();

        signIn({ email: 'alfredo_sabino@hotmail.com', password: '123456' })
    };

    return (
        <div className="container h-100 pt-5">
            <h1>Sign In</h1>
            <div className="d-flex flex-column h-100">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Your Password" />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        account: state.signIn.account
    }
}

export default connect(mapStateToProps, { signIn })(SignIn);