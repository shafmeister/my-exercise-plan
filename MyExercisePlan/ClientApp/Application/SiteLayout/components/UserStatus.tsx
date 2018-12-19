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
//types

export interface OwnProps {
    tester: string
}

interface StateProps {
    Username: string,
    NotificationCount: number
}

interface DispatchProps {
    decrement: () => void,
    setusername: (username: string) => void
}

type Props = StateProps & DispatchProps & OwnProps & RouteComponentProps<{}>;

export class UserStatus extends React.Component<Props, stateUserStatus>{
    constructor() {
        super();
        this.state = {
            hasWebToken: false,
            UserStatusInterval: undefined
        }
        this.UpdateUserStatus.bind(this);
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
        setInterval(this.UpdateUserStatus, 5000);
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

function mapStateToProps(state: UserStatusState): StateProps {
    return {
        Username: state.Username,
        NotificationCount: state.NotificationCount
    }
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>): DispatchProps {
    return {
        decrement: actionCreators.decrement,
        setusername: actionCreators.setusername
    }
}

export default connect<StateProps, DispatchProps, OwnProps>
    (mapStateToProps, mapDispatchToProps) (UserStatus);