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

interface UserInfoResponse {
    authenticationSuccess: boolean,
    username: string,
    notifications: UserNotification[]
}

interface UserNotification {
    userNotificationID: number,
    title: string,
    description: string,
    severity: number
}

export class UserStatus extends React.Component<UserStatusProps, stateUserStatus>{
    constructor() {
        super();
        this.state = {
            hasWebToken: false,
            UserStatusInterval: null
        }
    }

    UpdateUserStatus() {
        fetch('api/authentication/getuserinfo', { method: 'GET' })
            .then((response: Response) => response.json())
            .then((data: UserInfoResponse) => {
                this.props.setusername(data.username);
                console.log(data.username);
                console.log(this.props.Username);
                this.props.decrement();
            });
    }

    componentDidMount() {
        this.state.UserStatusInterval = setInterval(this.UpdateUserStatus(), 500);
    }

    render() {
        if (this.props.Username !== '') {
            return (
                <div className="user-status">
                    Welcome {this.props.Username}!
                    <br/> {this.props.NotificationCount}
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
    hasWebToken: boolean,
    UserStatusInterval?: Function
}

function mapStateToProps(state: UserStatusStore.UserStatusState) {
    return {
        username: state.Username,
        NotificationCount: state.NotificationCount
    }
}

export const ConnectedUserStatus = connect(
    //mapStateToProps,
    (state: ApplicationState) => state.userStatus,
    UserStatusStore.actionCreators
)(UserStatus as any);