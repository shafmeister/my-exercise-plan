//react
import * as React from 'react';
//route objects
import { Link, NavLink } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router';
import { Redirect } from "react-router-dom";
//redux
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { UserStatusState, actionCreators } from '../../SiteLayout/store/UserStatus';

interface OwnProps {

}

interface StateProps {

}

interface DispatchProps {
    setusername: (username: string) => void
}

type Props = OwnProps & StateProps & DispatchProps & RouteComponentProps<{}>;

class Login extends React.Component<Props, LoginState> {
    constructor() {
        super();
        this.state = {
            LoginAttempted: false,
            LoginSuccess: false,
            FailedAttempts: 0
        };
        this.SubmitForm = this.SubmitForm.bind(this);
    };

    SubmitForm(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        fetch('api/authentication/login', { method: 'POST', body: data })
            .then((response: Response) => response.json()) // Transform the data into json
                .then((data: LoginResponse) => {
                    console.log(data);
                    console.log(data.loginSuccess);
                    console.log(data.failedAttempts);
                    this.setState({
                        LoginAttempted: true,
                        LoginSuccess: data.loginSuccess,
                        FailedAttempts: data.failedAttempts
                    });
                    if (data.loginSuccess) {
                        this.props.setusername(data.username);
                    }
                });       
    };

    render() {
        if (this.state.LoginSuccess == true) {
            return (<Redirect to='/Dashboard' />)
        }
        return (
            <div className="login-container">
                <div className="login-form" >
                    <form onSubmit={this.SubmitForm}>
                        <label htmlFor="username">Username</label>
                        <input id="Username" name="Username"/>
                        <label htmlFor="password">Password</label>
                        <input id="Password" name="Password" type="password"/>
                        <input type="submit" value="Login"/>
                    </form>
                    Don't have an account yet?
                    <Link to="/register"><input type="submit" value="Register" /></Link>
                </div>
            </div>
            )
    }


}

interface LoginResponse {
    loginSuccess: boolean,
    errorMessage: string,
    username: string,
    failedAttempts: number
}

interface LoginState {
    LoginAttempted: boolean,
    LoginSuccess: boolean,
    FailedAttempts: number
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>): DispatchProps {
    return {
        setusername: (username: string) => dispatch(actionCreators.setusername(username))
    }
}

export const LoginContainer = (connect<RouteComponentProps<{}>, Partial<DispatchProps>, Partial<StateProps>>
    (null, mapDispatchToProps)(Login) as any);

