//react
import * as React from 'react';
//route objects
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
//redux objects
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
//images
var menuTop = require('../../../assets/images/menuIcon.png');
var menuBottom = require('../../../assets/images/menuIconHover.png');
//other components
import { UserStatus } from './UserStatus'
//types

interface stateNavMenu {
    sideNavOpen: boolean
}

interface UserInfoResponse {
    authenticationSuccess: boolean,
    username: string,
    notifications: UserNotification[]
}

interface UserNotification {
    userNotificationID: number,
    title: string,
    description: string,
    severity: number
}

export default class NavMenu extends React.Component<RouteComponentProps<{}>, stateNavMenu> {
    constructor() {
        super();
        this.state = {
            sideNavOpen: false
        };
    }

    toggleSideNav() {
        this.setState({ sideNavOpen: !this.state.sideNavOpen });
    }
    
    public render() {
        return (
            <div className='main-nav'>
                    <div onClick={this.toggleSideNav.bind(this)} className="menu-icon"> 
                        <img className='menu-bottom' src={String(menuBottom)} />
                        <img className='menu-top' src={String(menuTop)} />
                    </div>
                    <MenuSideBar isVisible={this.state.sideNavOpen} />
                    <div className='navbar-header'>
                        <Link className='navbar-brand' to={ '/' }>WorkoutTracker</Link>
                </div>
                <UserStatus />
                
            </div>
        );
    }
}


interface propsMenuSideBar {
    isVisible: boolean
}

const MenuSideBar: React.SFC<propsMenuSideBar> = (props) => {
    if (props.isVisible)
        return (
            <div>
                <div className="menu-side-bar-bg fade-in-half">
                </div>
                <div className="menu-side-bar slide-in">
                    <div className="side-bar-link"><Link to="/dashboard"> My Dashboard </Link></div>
                    <div className="side-bar-link"><Link to="/form"> Workouts </Link></div>
                    <div className="side-bar-link"><Link to="/calendar"> Calendar </Link></div>
                </div>
            </div>
        )
    else {
        return (
            <div>
                <div className="menu-side-bar-bg fade-out-half">
                </div>
                <div className="menu-side-bar slide-out">
                    <div className="side-bar-link"><Link to="/dashboard"> My Dashboard </Link></div>
                    <div className="side-bar-link"><Link to="/form"> Workouts </Link></div>
                    <div className="side-bar-link"><Link to="/calendar"> Calendar </Link></div>
                </div>
            </div>
            );
    }
};

