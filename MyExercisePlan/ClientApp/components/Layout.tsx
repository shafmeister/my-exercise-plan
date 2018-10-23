import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Calendar } from './Calendar';
import { SimpleWorkout } from './WorkoutSimple';
import { Form } from './Form';
import { RouteComponentProps } from 'react-router';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
                <NavMenu />
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