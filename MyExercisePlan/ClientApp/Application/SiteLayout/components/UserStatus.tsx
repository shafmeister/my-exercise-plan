import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class UserStatus extends React.Component<{}, stateUserStatus>{
    constructor() {
        super();
        this.state = {
            hasWebToken: false
        }
    }
    render() {
        if (this.state.hasWebToken) {
            return (
                <div className="user-status">
                    User status here
                </div>
            )
        }
        else {
            return (
                <div className="user-status">
                    <Link to="/login"> Login </Link>
                </div>
            )
        }
    }
}

interface stateUserStatus {
    hasWebToken: boolean
}