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
            this.props.IsOpen ? (
                <div className="notification-pane fade-in-short">
                    <Notifications {Notifications = this.props.UserNotifications}/>
                </div>
            ) : (
                    <div className="notification-pane hidden">
                    </div>
                )
        )
     }
    
}