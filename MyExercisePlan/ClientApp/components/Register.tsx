import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Redirect } from "react-router-dom";
var greenCheck = require('../images/greenCheck.jpg');
var redX = require('../images/redX.png');

export class Register extends React.Component<RouteComponentProps<{}> & RegisterProps, RegisterState> {
    constructor() {
        super();
        this.state = {
            RegistrationAttempted: false,
            RegistrationSuccessful: false,
            ErrorMessage: '',
            PasswordsMatch: true,
            PasswordLength: false,
            PasswordSymbols: false,
            PasswordLetters: false,
            PasswordNumbers: false
        }
        this.SubmitForm = this.SubmitForm.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    };

    SubmitForm(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (this.state.PasswordsMatch && this.state.PasswordLength && this.state.PasswordSymbols && this.state.PasswordLetters && this.state.PasswordNumbers) {
            fetch('api/login/register', { method: 'POST', body: data })
                .then((response: Response) => response.json()) // Transform the data into json
                .then((data: RegisterResponse) => {
                    this.setState({
                        RegistrationAttempted: true,
                        RegistrationSuccessful: data.registrationSuccess,
                        ErrorMessage: data.errorMessage
                    });
                });
        }
    };

    validatePassword() {
        var Password = (document.getElementById('password') as HTMLInputElement).value;
        var PasswordConfirm = (document.getElementById('passwordConfirm') as HTMLInputElement).value;
        var LengthRegex = /(.{8,64})/;
        var LetterRegex = /((?=.*[A-Za-z]).*)/;
        var SymbolRegex = /((?=.*[)(!@#$%^&*_]).*)/;
        var NumberRegex = /((?=.*\d).*)/;
        
        this.setState({
            PasswordsMatch: Password == PasswordConfirm,
            PasswordLength: LengthRegex.test(Password),
            PasswordSymbols: SymbolRegex.test(Password),
            PasswordLetters: LetterRegex.test(Password),
            PasswordNumbers: NumberRegex.test(Password)
        });
    }

    render() {
        if (this.state.RegistrationSuccessful == true) {
            return ( <Redirect to='/Dashboard' /> )
        }
        return (
            <div className="register-container">
                <div className="register-form" >
                    <form onSubmit={this.SubmitForm}>
                        <label htmlFor="username" >Username: </label>
                        <input id="username" className="register-input" name="username" required/>
                        <br />
                        <div className="password-container">
                            <label htmlFor="password">Password: </label>
                            <input id="password" className="register-input" name="password" type="password" onChange={this.validatePassword} required/>
                            <br />
                            <label htmlFor="passwordConfirm">Confirm Password: </label>
                            <input id="passwordConfirm" className="register-input" name="passwordConfirm" type="password" onChange={this.validatePassword} required />
                            <div className="password-tooltip"> 
                                {
                                    this.state.PasswordsMatch
                                        ? (
                                            <span id="password-tooltip-match">
                                                Passwords match: <img className="icon-small" src={String(greenCheck)} />
                                            </span>
                                        )
                                        : (
                                            <span id="password-tooltip-match">
                                                Passwords match: <img className="icon-small" src={String(redX)} />
                                            </span>
                                        )
                                }
                                <br/>
                                {
                                    this.state.PasswordLength
                                        ? (
                                            <span id="password-tooltip-length">
                                                At least 8 characters: <img className="icon-small" src={String(greenCheck)} />
                                            </span>
                                        )
                                        : (
                                            <span id="password-tooltip-length">
                                                At least 8 characters: <img className="icon-small" src={String(redX)} />
                                            </span>
                                        )
                                }
                                <br />
                                {
                                    this.state.PasswordNumbers
                                        ? (
                                            <span id="password-tooltip-numbers">
                                                At least 1 number: <img className="icon-small" src={String(greenCheck)} />
                                            </span>
                                        )
                                        : (
                                            <span id="password-tooltip-numbers">
                                                At least 1 number: <img className="icon-small" src={String(redX)} />
                                            </span>
                                        )
                                }
                                <br />
                                {
                                    this.state.PasswordLetters
                                        ? (
                                            <span id="password-tooltip-letters">
                                                At least 1 letter: <img className="icon-small" src={String(greenCheck)} />
                                            </span>
                                        )
                                        : (
                                            <span id="password-tooltip-letters">
                                                At least 1 letter: <img className="icon-small" src={String(redX)} />
                                            </span>
                                        )
                                }
                                <br />
                                {
                                    this.state.PasswordSymbols
                                        ? (
                                            <span id="password-tooltip-symbols">
                                                At least 1 symbol: <img className="icon-small" src={String(greenCheck)} />
                                            </span>
                                        )
                                        : (
                                            <span id="password-tooltip-symbols">
                                                At least 1 symbol: <img className="icon-small" src={String(redX)} />
                                            </span>
                                        )
                                }
                            </div>
                        </div>
                        <br />
                        <label htmlFor="firstname">Firstname: </label>
                        <input id="firstname" className="register-input" name="firstname" required/>
                        <br />
                        <label htmlFor="middlename">Middlename: </label>
                        <input id="middlename" className="register-input" name="middlename" />
                        <br />
                        <label htmlFor="lastname">Lastname: </label>
                        <input id="lastname" className="register-input" name="lastname" required/>
                        <br />
                        <label htmlFor="state">State: </label>
                        <input id="state" className="register-input" name="state" required />
                        <br />
                        <label htmlFor="city">City: </label>
                        <input id="city" className="register-input" name="city" required />
                        <br />
                        <input type="submit" value="Register" />
                    </form>
                    
                </div>
                <div>
                    Errors go here
                </div>
                Already have an account?
                <Link className="" to="/login"><input type="submit" value="Login" /></Link>
            </div>
            )
    }
}

interface RegisterProps {

}

interface RegisterState {
    RegistrationAttempted: boolean,
    RegistrationSuccessful: boolean,
    ErrorMessage: string,
    PasswordsMatch: boolean,
    PasswordLength: boolean,
    PasswordSymbols: boolean,
    PasswordLetters: boolean,
    PasswordNumbers: boolean
}

interface RegisterResponse {
    registrationSuccess: boolean,
    errorMessage: string
}