//react
import * as React from 'react';
//route objects
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
//redux objects
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as NavMenuStore from '../store/NavMenu'
//images
var menuTop = require('../images/menuIcon.png');
var menuBottom = require('../images/menuIconHover.png');
//other components
import { UserStatus } from './UserStatus'
//types

type NavMenuProps =
    NavMenuStore.NavMenuState
    & typeof NavMenuStore.actionCreators
    & RouteComponentProps<{}>;

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

class NavMenu extends React.Component<NavMenuProps, stateNavMenu> {
    constructor() {
        super();
        this.state = {
            sideNavOpen: false
        };
        this.GetUserInfo = this.GetUserInfo.bind(this);
    }

    toggleSideNav() {
        this.setState({ sideNavOpen: !this.state.sideNavOpen });
        console.log(this.props.NotificationCount);
    }

    GetUserInfo() {
        fetch('api/authentication/getuserinfo', { method: 'GET' })
            .then((response: Response) => response.json())
            .then((data: UserInfoResponse) => {
                this.props.setusername(data.username);
            });
    }

    componentDidMount() {
        var updateUserInfo = setInterval(this.GetUserInfo, 5000) 
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
                
                <button onClick={this.props.decrement} > Decrement count </button>
                <button onClick={this.props.clear} > Clear count </button>
                {this.props.Username
                    ? (this.props.Username)
                    : ('Sign in')}
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

function mapStateToProps(state: NavMenuStore.NavMenuState) {
    return {
        username: state.Username,
        NotificationCount: state.NotificationCount
    }
}

export default connect(
    //mapStateToProps,
    (state: ApplicationState) => state.navMenu, 
    NavMenuStore.actionCreators
)(NavMenu as any) as typeof NavMenu;