import * as React from 'react';
import * as FormInterfaces from './FormInterfaces';

interface propsFormDisplay {
    updateRequired: boolean,
    phone: FormInterfaces.phoneDetails
};

interface stateFormDisplay {
    phone: FormInterfaces.phoneDetails
};

export default class FormDisplay extends React.Component<propsFormDisplay, stateFormDisplay> {
    constructor(props: propsFormDisplay) {
        super(props);
        this.state = {
            phone: {
                name: this.props.phone.name,
                manufacturer: this.props.phone.manufacturer,
                cpuCores: this.props.phone.cpuCores,
                screenSize: this.props.phone.screenSize,
                price: this.props.phone.price,
                ramSize: this.props.phone.ramSize
            }
        };
    }
    render() {
        return (
            <div className="form-display">
                <p>Phone Name: {this.state.phone.name.toString()}</p>
                <p>Manufacturer: {this.state.phone.manufacturer.toString()}</p>
                <p>CPU Cores: {this.state.phone.cpuCores.toString()}</p>
                <p>Screen Size: {this.state.phone.screenSize.toString()}</p>
                <p>Price: {this.state.phone.price.toString()}</p>
                <p>RAM: {this.state.phone.ramSize.toString()}</p>
            </div>
        );
    }
};

