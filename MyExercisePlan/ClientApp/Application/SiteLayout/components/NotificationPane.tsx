//react
import * as React from 'react';
//redux
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import { UserStatusState, actionCreators } from '../store/UserStatus';
import { RouteComponentProps } from 'react-router';
//types
import { UserNotification } from '../types/UserStatusTypes'

interface OwnProps {
    IsOpen: boolean
}

interface StoreProps {
    UserNotifications: UserNotification[]
}

interface DispatchProps {
    clearnotification: (NotificationId: number) => void,
    clearnotificationall: () => void
}

interface LocalState {

}

type Props = OwnProps & StoreProps & DispatchProps;

type State = LocalState;

export class NotificationPane extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);

    }

    render() {
        return (
            this.props.IsOpen
                ? (
                    <div className="notification-pane scrollbar fade-in-short">
                        <button onClick={this.props.clearnotificationall}>Clear all</button>
                        <Notifications UserNotifications={this.props.UserNotifications} ClearNotification={this.props.clearnotification} />
                </div>
                ) : (
                <div className="notification-pane hidden">
                </div>
                )
        )
     }
}

interface NotificationsProps{
    UserNotifications: UserNotification[],
    ClearNotification: (NotificationId: number) => void
}

class Notifications extends React.Component<NotificationsProps>{
    constructor(props: NotificationsProps) {
        super(props);

        this.MapNotifications = this.MapNotifications.bind(this);
    }

    MapNotifications(Notifications: any) {
        var NotificationList = Notifications.map((Notification: UserNotification) =>
            <div key={Notification.userNotificationID} className='notification-item'>
                <button onClick={() => this.props.ClearNotification(Notification.userNotificationID)}>X</button>
                <span className="title-small">{Notification.title}</span><br/>
                <span>{Notification.description}</span>
            </div>
        )
        return NotificationList
    }

    render() {
        return (
            <div>
                {this.MapNotifications(this.props.UserNotifications)}
            </div>
        )
    }
}



function mapStateToProps(state: ApplicationState): StoreProps {
    return {
        UserNotifications: state.userStatus.UserNotifications
    }
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>): DispatchProps {
    return {
        clearnotification: (NotificationId: number) => dispatch(actionCreators.clearnotification(NotificationId)),
        clearnotificationall: () => dispatch(actionCreators.clearnotificationall())
    }
}

export const NotificationPaneContainer = connect<StoreProps, DispatchProps, OwnProps>
    (mapStateToProps, mapDispatchToProps)(NotificationPane as any)