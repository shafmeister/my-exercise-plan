//react
import * as React from 'react';
//route objects
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
//redux
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as UserStatusStore from '../store/UserStatus';
//types

type UserStatusProps = 
    UserStatusStore.UserStatusState
    & typeof UserStatusStore.actionCreators
    & RouteComponentProps<{}>;
;

export class UserStatus extends React.Component<UserStatusProps, stateUserStatus>{
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

function mapStateToProps(state: UserStatusStore.UserStatusState) {
    return {
        username: state.Username,
        NotificationCount: state.NotificationCount
    }
}

export default connect(
    //mapStateToProps,
    (state: ApplicationState) => state.navMenu,
    UserStatusStore.actionCreators
)(UserStatus as any) as typeof UserStatus;