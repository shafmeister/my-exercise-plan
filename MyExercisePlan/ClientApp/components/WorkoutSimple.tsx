import * as React from 'react';


export class SimpleWorkout extends React.Component<{ workout: propsSimpleWorkout }, stateSimpleWorkout> {
    constructor()
    {
        super();
        this.state = {
            editMode: false,
            unsavedEdits: false
        }
    }

    render() {
        if (!this.state.editMode) {
            return (<div className="table-workout">
                <div className="header-row">
                    <div className="header-cell">Name</div>
                    <div className="header-cell">Exercises</div>
                    <div className="header-cell">Type</div>
                    <div className="header-cell">Last Completed</div>
                    <div className="header-cell">Currently Used</div>
                </div>
                <div className="body-row">
                    <div className="body-cell">{this.props.workout.name}</div>
                    <div className="body-cell">{this.props.workout.totalExercises}</div>
                    <div className="body-cell">{this.props.workout.type}</div>
                    <div className="body-cell">{this.props.workout.lastCompleted}</div>
                    <div className="body-cell">{this.props.workout.currentlyUsed}</div>
                </div>
                  <button onClick={e => this.toggleEditMode()}> Edit </button>
                    </div> )
        }
        else {
            return (<div className="table-workout">
                <div className="header-row">
                    <div className="header-cell">Name</div>
                    <div className="header-cell">Exercises</div>
                    <div className="header-cell">Type</div>
                    <div className="header-cell">Last Completed</div>
                    <div className="header-cell">Currently Used</div>
                </div>
                <div className="body-row">
                    <div className="body-cell">
                        <input className="body-input" defaultValue={this.props.workout.name} />
                    </div>
                    <div className="body-cell">
                        <input className="body-input" defaultValue={this.props.workout.totalExercises.toString()} />
                    </div>
                    <div className="body-cell">
                        <input className="body-input" defaultValue={this.props.workout.type} />
                    </div>
                    <div className="body-cell">
                        <input className="body-input" defaultValue={this.props.workout.lastCompleted} />
                    </div>
                    <div className="body-cell">
                        <input className="body-input" defaultValue={this.props.workout.currentlyUsed.toString()} />
                    </div>
                </div>
                <button onClick={e => this.toggleEditMode()}> Save </button>
            </div> )
        }
    }

    toggleEditMode() {
        let newState: stateSimpleWorkout;
        newState = this.state;
        newState.editMode = !newState.editMode;
        this.setState(newState);
    }
}



interface propsSimpleWorkout {
    id: number,
    name: string,
    totalExercises: number,
    type: string,
    lastCompleted: string,
    currentlyUsed: boolean
}

interface stateSimpleWorkout {
    editMode: boolean,
    unsavedEdits: boolean
}