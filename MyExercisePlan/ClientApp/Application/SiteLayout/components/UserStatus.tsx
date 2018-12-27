//react
import * as React from 'react';
//route objects
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
//redux
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import { UserStatusState, actionCreators } from '../store/UserStatus';
//images
var notificationBell = require('../../../assets/images/notificationBell.jpg');
var greySettingsGear = require('../../../assets/images/greySettingsGear.png');
//types

export interface OwnProps {
    
}

interface StateProps {
    Username: string,
    NotificationCount: number
}

interface DispatchProps {
    decrement: () => void,
    increment: () => void,
    setusername: (username: string) => void
}

interface LocalState {
    NotificationPaneOpen: boolean,
    UserDetailsPaneOpen: boolean
}

type Props = StateProps & DispatchProps & OwnProps & RouteComponentProps<{}>;

class UserStatus extends React.Component<Props, LocalState>{
    constructor(props: Props) {
        super(props);
        this.state = {
            NotificationPaneOpen: false,
            UserDetailsPaneOpen: false
        }
        this.UpdateUserStatus = this.UpdateUserStatus.bind(this);
        this.ToggleNotificationVisibility = this.ToggleNotificationVisibility.bind(this);
    }

    UpdateUserStatus(props: Props) {
        fetch('api/authentication/getuserinfo', { method: 'GET' })
            .then((response: Response) => response.json())
            .then((data: UserInfoResponse) => {
                this.props.setusername(data.username);
                this.props.increment();
            });
    }

    componentDidMount() {
        setInterval(this.UpdateUserStatus, 5000);
    }

    ToggleNotificationVisibility() {
        this.setState({
            NotificationPaneOpen: !this.state.NotificationPaneOpen
        });
    }

    render() {
        if (this.props.Username !== '') {
            return (
                <div className="user-status">
                    <div className="greeting-container">
                        Welcome {this.props.Username}!
                    </div>
                    <div className="notification-bell-container" onClick={this.ToggleNotificationVisibility}>
                        <img className="notification-bell" src={String(notificationBell)} />
                        <div className="notification-circle">
                            <span className="notification-number-container">
                                {this.props.NotificationCount}
                            </span>
                        </div>
                    </div>
                    <div className="notification-bell-container" onClick={this.ToggleNotificationVisibility}>
                        <img className="notification-bell" src={String(greySettingsGear)} />
                    </div>
                    {
                        this.state.NotificationPaneOpen ? (
                            <div className="notification-pane fade-in-short">
                            </div>
                        ) : (
                                <div className="notification-pane hidden">
                                </div>
                            )
                    }
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


interface State {
    internalComponentStateField: string
}

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

function mapStateToProps(state: ApplicationState): StateProps {
    return {
        Username: state.userStatus.Username,
        NotificationCount: state.userStatus.NotificationCount
    }
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>): DispatchProps {
    return {
        decrement: () => dispatch(actionCreators.decrement()),
        increment: () => dispatch(actionCreators.increment()),
        setusername: (username: string) => dispatch(actionCreators.setusername(username))
    }
}

export const UserStatusContainer = connect<StateProps, DispatchProps, OwnProps>
    (mapStateToProps, mapDispatchToProps)(UserStatus as any);