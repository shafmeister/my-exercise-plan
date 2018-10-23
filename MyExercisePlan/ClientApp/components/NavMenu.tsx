import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
var menuTop = require('../images/menuIcon.png');
var menuBottom = require('../images/menuIconHover.png');
import { UserStatus } from './UserStatus'
import { RouteComponentProps } from 'react-router';

interface stateNavMenu {
    sideNavOpen: boolean
}
interface propsMenuSideBar {
    isVisible: boolean
}

export class NavMenu extends React.Component<{}, stateNavMenu> {
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


