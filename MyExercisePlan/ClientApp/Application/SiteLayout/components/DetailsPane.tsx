//react
import * as React from 'react';
//redux
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import { UserStatusState, actionCreators } from '../store/UserStatus';
import { RouteComponentProps } from 'react-router';
//types

interface OwnProps {
    IsOpen: boolean
}

interface StoreProps {

}

interface DispatchProps {

}

interface LocalState {

}

type Props = OwnProps & StoreProps & DispatchProps;

type State = LocalState;

export class DetailsPane extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
    }

    render() {
        return (
            this.props.IsOpen ? (
                <div className="details-pane fade-in-short">
                </div>
            ) : (
                    <div className="details-pane hidden">
                    </div>
                )
        )
     }
    
}