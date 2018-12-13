import * as React from 'react';
import NavMenu from './NavMenu';
import { RouteComponentProps } from 'react-router';
import { Route, Redirect } from 'react-router-dom'

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
            <Route path="/" component={NavMenu} />
            <div>
                
            </div>
                {this.props.children}
            </div>;
    }
}
//<SimpleWorkout workout={workout} />
const workout =
    {
        id: 1,
        name: "Back and Bis",
        totalExercises: 6,
        type: "Strength",
        lastCompleted: "2012-04-23T18:25:43.511Z",
        currentlyUsed: true
    };


interface propsSimpleWorkout {
    id: number,
    name: string,
    totalExercises: number,
    type: string,
    lastCompleted: string,
    currentlyUsed: boolean
}