//react
import * as React from 'react';
//components
import { NotificationPaneContainer } from './NotificationPane';
import { DetailsPane } from './DetailsPane'
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
import { UserNotification } from '../types/UserStatusTypes';

export interface OwnProps {

}

interface StateProps {
    Username: string,
    UserNotificationCount: number
}

interface DispatchProps {
    setusername: (username: string) => void,
    clearusername: () => void,
    clearnotification: (NotificationId: number) => void
    setnotifications: (Notifications: UserNotification[]) => void
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
        this.ToggleUserDetailsVisibility = this.ToggleUserDetailsVisibility.bind(this);
    }

    UpdateUserStatus() {
        fetch('api/authentication/getuserinfo', { method: 'GET' })
            .then((response: Response) => response.json())
            .then((data: UserInfoResponse) => {
                this.props.setusername(data.username);
                this.props.setnotifications(data.notifications);
            });
    }

    componentWillReceiveProps(nextProps: any) {
        if (this.props.Username !== nextProps.Username) {
            this.UpdateUserStatus();
        }
    }

    componentDidMount() {
        this.UpdateUserStatus();
    }

    ToggleNotificationVisibility() {
        this.setState({
            NotificationPaneOpen: !this.state.NotificationPaneOpen,
            UserDetailsPaneOpen: false
        });
    }

    ToggleUserDetailsVisibility() {
        this.setState({
            NotificationPaneOpen: false,
            UserDetailsPaneOpen: !this.state.UserDetailsPaneOpen
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
                                {this.props.UserNotificationCount}
                            </span>
                        </div>
                    </div>
                    <div className="notification-bell-container" onClick={this.ToggleUserDetailsVisibility}>
                        <img className="notification-bell" src={String(greySettingsGear)} />
                    </div>
                    <NotificationPaneContainer IsOpen={this.state.NotificationPaneOpen} />
                    <DetailsPane IsOpen={this.state.UserDetailsPaneOpen} />
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

function mapStateToProps(state: ApplicationState): StateProps {
    return {
        Username: state.userStatus.Username,
        UserNotificationCount: state.userStatus.UserNotificationCount
    }
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>): DispatchProps {
    return {
        clearusername: () => dispatch(actionCreators.clearusername()),
        clearnotification: (NotificationId: number) => dispatch(actionCreators.clearnotification(NotificationId)),
        setusername: (username: string) => dispatch(actionCreators.setusername(username)),
        setnotifications: (Notifications: UserNotification[]) => dispatch(actionCreators.setnotifications(Notifications))
    }
}

export const UserStatusContainer = connect<StateProps, DispatchProps, OwnProps>
    (mapStateToProps, mapDispatchToProps)(UserStatus as any);