import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

export class Register extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return (
            <div className="register-container">
                <div className="register-form" >
                    <form action="api/login/auth" method="POST">
                        <label htmlFor="username">Username</label>
                        <input id="username" name="username"/>
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" onChange={this.validatePassword}/>
                        <label htmlFor="passwordTwo">Confirm Password</label>
                        <input id="passwordTwo" name="passwordTwo" type="passwordTwo" />
                        <input type="submit" value="Register"/>
                    </form>
                    Already have an account?
                    <Link className="" to="/login"><input type="submit" value="Login" /></Link>
                </div>
            </div>
            )
    }
    validatePassword() {

    }

}