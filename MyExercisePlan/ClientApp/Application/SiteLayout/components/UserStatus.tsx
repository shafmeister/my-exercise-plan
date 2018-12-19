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

class UserStatus extends React.Component<Props, stateUserStatus>{
    constructor(props: Props) {
        super(props);
        this.state = {
            hasWebToken: false,
            UserStatusInterval: undefined
        }
        this.UpdateUserStatus = this.UpdateUserStatus.bind(this);
    }

    UpdateUserStatus(props: Props) {
        fetch('api/authentication/getuserinfo', { method: 'GET' })
            .then((response: Response) => response.json())
            .then((data: UserInfoResponse) => {
                console.log(data.username);
                this.props.setusername(data.username);
                this.props.decrement();
                console.log(this.props.Username + "Poop");
            });
    }

    componentDidMount() {
        setInterval(this.UpdateUserStatus, 5000);
    }

    render() {
        console.log("**** FORM print props");
        console.log(this.props);
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

function mapStateToProps(state: ApplicationState): StateProps {
    console.log("statemapped");
    return {
        Username: state.userStatus.Username,
        NotificationCount: state.userStatus.NotificationCount
    }
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>): DispatchProps {
    console.log("dispatchmapped");
    return {
        decrement: () => dispatch(actionCreators.decrement()),
        setusername: (username: string) => dispatch(actionCreators.setusername(username))
    }
}

export const UserStatusContainer = connect<StateProps, DispatchProps, OwnProps>
    (mapStateToProps, mapDispatchToProps)(UserStatus as any);