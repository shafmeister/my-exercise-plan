import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Redirect } from "react-router-dom";

export class Login extends React.Component<RouteComponentProps<{}> & LoginProps, LoginState> {
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
    failedAttempts: number
}

interface LoginState {
    LoginAttempted: boolean,
    LoginSuccess: boolean,
    FailedAttempts: number
}

interface LoginProps {

}