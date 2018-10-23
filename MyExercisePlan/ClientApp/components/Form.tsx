import * as React from 'react';
import FormInput from './FormInput';
import * as FormInterfaces from './FormInterfaces';
import { RouteComponentProps } from 'react-router';

export interface propsForm {

};

export interface stateForm {
    updateRequired: boolean,
    formModified: boolean,
    phone: FormInterfaces.phoneDetails
};


export class Form extends React.Component<RouteComponentProps<propsForm>, stateForm> {
    constructor() {
        super();
        this.state = {
            updateRequired: false,
            formModified: false,
            phone: {
                name: "",
                manufacturer: "",
                cpuCores: 0,
                screenSize: 0,
                price: 0,
                ramSize: 0
            }
        };
    }

    toggleUpdate(newPhone: FormInterfaces.phoneDetails) {
        this.setState({
            updateRequired: true,
            formModified: false,
            phone: newPhone
        });
    };

    formModified() {
        this.setState({ formModified: true });
    };

    render() {
        if (this.state.formModified) {
            return (
                <div className="form-container">
                    
                    <FormInput updateParent={this.toggleUpdate.bind(this)} formModified={this.formModified.bind(this)} />
                    <FormDisplayStateless updateRequired={this.state.updateRequired} phone={this.state.phone} />
                    <div>
                        Unsaved changes!
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="form-container">
                    
                    <FormInput updateParent={this.toggleUpdate.bind(this)} formModified={this.formModified.bind(this)} />
                    <FormDisplayStateless updateRequired={this.state.updateRequired} phone={this.state.phone} />
                </div>
            )
        };
    }
};

interface propsFormDisplay {
    updateRequired: boolean,
    phone: FormInterfaces.phoneDetails
};

interface stateFormDisplay {
    phone: FormInterfaces.phoneDetails
};

const FormDisplayStateless: React.SFC<propsFormDisplay> = (props) => {
    return (
        <div className="form-display">
            <p>Phone Name: {props.phone.name.toString()}</p>
            <p>Manufacturer: {props.phone.manufacturer.toString()}</p>
            <p>CPU Cores: {props.phone.cpuCores.toString()}</p>
            <p>Screen Size: {props.phone.screenSize.toString()}</p>
            <p>Price: {props.phone.price.toString()}</p>
            <p>RAM: {props.phone.ramSize.toString()}</p>
        </div>
    );
};

