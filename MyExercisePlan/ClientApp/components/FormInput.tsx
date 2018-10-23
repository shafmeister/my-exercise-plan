import * as React from 'react';
import { phoneDetails } from './FormInterfaces';

interface propsFormInput {
    updateParent(phone: phoneDetails): VoidFunction
    formModified: VoidFunction
};

interface stateFormInput {
    phone: phoneDetails
}

export default class FormInput extends React.Component<propsFormInput, stateFormInput> {
    constructor(props: propsFormInput) {
        super(props);
        this.state = {
            phone: {
                name: "V30",
                manufacturer: "LG",
                cpuCores: 4,
                screenSize: 6.2,
                price: 850,
                ramSize: 4
            }
        }
    }

    render() {
        return (
            <div>
                <input defaultValue={this.state.phone.name} name="name" onChange={(e) => this.nameChange(e)} />
                <input defaultValue={this.state.phone.manufacturer} name="manufacturer" onChange={(e) => this.nameChange(e)} />
                <input defaultValue={this.state.phone.cpuCores.toString()} name="cpuCores" onChange={(e) => this.nameChange(e)} />
                <input defaultValue={this.state.phone.screenSize.toString()} name="screenSize" onChange={(e) => this.nameChange(e)} />
                <input defaultValue={this.state.phone.price.toString()} name="price" onChange={(e) => this.nameChange(e)} />
                <input defaultValue={this.state.phone.ramSize.toString()} name="ramSize" onChange={(e) => this.nameChange(e)} />
                <button onClick={this.updateState.bind(this)}> Update </button>
            </div>
        );
    }
    
    nameChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value.toString());
        const currPhone = this.state.phone;
        const newPhone = { ...currPhone, [e.target.name]: e.target.value };
        this.setState({ phone: newPhone });
        this.props.formModified();
    }

    updateState() {
        this.props.updateParent(this.state.phone);
    }
};

