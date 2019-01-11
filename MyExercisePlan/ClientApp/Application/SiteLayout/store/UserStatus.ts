import { Action, Reducer } from 'redux';
import { UserNotification } from '../types/UserStatusTypes';

//STATE
export interface UserStatusState {
    Username: string,
    UserNotificationCount: number,
    UserNotifications: UserNotification[],
    NotificationPaneIsOpen: boolean,
    UserPaneIsOpen: boolean
}

//
const initialState = {
    Username: '',
    UserNotificationCount: 0,
    UserNotifications: [],
    NotificationPaneIsOpen: false,
    UserPaneIsOpen: false
}

//ACTIONS
interface ClearNotificationAction { type: 'CLEAR_NOTIFICATION', NotificationId: number }
interface ClearNotificationAllAction { type: 'CLEAR_NOTIFICATION_ALL' }
interface ClearUsernameAction { type: 'CLEAR_USERNAME' }
interface SetNotificationsAction { type: 'SET_NOTIFICATION_ALL', UserNotifications: UserNotification[] }
interface SetUsernameAction { type: 'SET_USERNAME', username: string }


//Known action type, to exclude unknown action calls
type KnownAction = ClearNotificationAction | ClearNotificationAllAction | ClearUsernameAction | SetNotificationsAction | SetUsernameAction;


//ACTION CREATORS
export const actionCreators = {
    clearnotification: (NotificationId: number) => <ClearNotificationAction>{ type: 'CLEAR_NOTIFICATION', NotificationId },
    clearnotificationall: () => <ClearNotificationAllAction>{ type: 'CLEAR_NOTIFICATION_ALL' },
    clearusername: () => <ClearUsernameAction>{ type: 'CLEAR_USERNAME' },
    setnotifications: (UserNotifications: UserNotification[]) => <SetNotificationsAction>{ type: 'SET_NOTIFICATION_ALL', UserNotifications },
    setusername: (username: string) => <SetUsernameAction>{ type: 'SET_USERNAME', username },
    
}


//REDUCER
export const reducer: Reducer<UserStatusState> = (state: UserStatusState = initialState, action: KnownAction) => {
    switch (action.type) {
        case ('CLEAR_NOTIFICATION_ALL'):
            return Object.assign({}, state, { UserNotifications: [], UserNotificationCount: 0 })
        case ('CLEAR_NOTIFICATION'):
            for (var i = 0; i < state.UserNotifications.length; i++) {
                if (state.UserNotifications[i].userNotificationID === action.NotificationId) {
                    return Object.assign({}, state, {
                        UserNotifications: [
                            ...state.UserNotifications.slice(0, i),
                            ...state.UserNotifications.slice(i + 1, state.UserNotifications.length)
                        ],
                        UserNotificationCount: state.UserNotifications.length - 1
                    });
                }
            }
            return state
        case ('CLEAR_USERNAME'):
            return Object.assign({}, state, { Username: '' })
        case ('SET_NOTIFICATION_ALL'):
            return Object.assign({}, state, {
                UserNotifications: action.UserNotifications,
                UserNotificationCount: action.UserNotifications.length
            })
        case ('SET_USERNAME'):
            return Object.assign({}, state, { Username: action.username })
        default:
            const exhaustiveCheck: never = action;
    }
    return state || Object.assign({}, state, initialState);
}