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
    clearnotification: (NotificationId: number) => void
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
                <div className="notification-pane fade-in-short">
                    <Notifications UserNotifications={this.props.UserNotifications}/>
                </div>
                ) : (
                <div className="notification-pane hidden">
                </div>
                )
        )
     }
}

interface NotificationsProps{
    UserNotifications: UserNotification[]
}

class Notifications extends React.Component<NotificationsProps>{
    constructor(props: NotificationsProps) {
        super(props);

        this.MapNotifications = this.MapNotifications.bind(this);
    }

    MapNotifications(Notifications: any) {
        var NotificationList = Notifications.map((Notification: any) =>
            <div key={Notification.userNotificationID} >
                {Notification.isActive}<br />
                {Notification.title}<br/>
                {Notification.description}
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
        clearnotification: (NotificationId: number) => dispatch(actionCreators.clearnotification(NotificationId))
    }
}

export const NotificationPaneContainer = connect<StoreProps, DispatchProps, OwnProps>
    (mapStateToProps, mapDispatchToProps)(NotificationPane as any)