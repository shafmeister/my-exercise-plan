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

}

interface StoreProps {

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
}