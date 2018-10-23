import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { UserStatus } from 'ClientApp/components/UserStatus';

export class Login extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
        this.state = {
            LoginAttempted: false,
            LoginSuccess: false,
            Username: ""
        };
        this.SubmitForm = this.SubmitForm.bind(this);
    };

    SubmitForm(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        var Response: LoginResponse;  

        fetch('login/auth', { method: 'POST', body: data })
            .then((response: Response) => response.json()) // Transform the data into json
                .then(data => {
                    Response = data.value;
                    console.log(Response);
                    this.setState({
                        LoginAttempted: true,
                        LoginSuccess: Response.responseVM.LoginSuccessful,
                        Username: Response.userVM.Username
                    });
                });       
    };

    render() {
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
    userVM: UserViewModel,
    responseVM: ResponseViewModel
}

interface ResponseViewModel {
    LoginSuccessful: boolean,
    //Message to display in the user interface
    ResponseMessage: string,
    FailedAttempts: number
}

interface UserViewModel {
    Username: string,
    Firstname: string,
    Lastname: string,
    ActiveNotifications: number
}

