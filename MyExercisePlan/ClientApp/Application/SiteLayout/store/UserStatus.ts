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
interface ClearUsernameAction { type: 'CLEAR_USERNAME' }
interface ClearNotificationAction { type: 'CLEAR_NOTIFICATION', NotificationId: number }
interface SetUsernameAction { type: 'SET_USERNAME', username: string }


//Known action type, to exclude unknown action calls
type KnownAction = ClearNotificationAction | SetUsernameAction | ClearUsernameAction;


//ACTION CREATORS
export const actionCreators = {
    clearnotification: (NotificationId: number) => <ClearNotificationAction>{ type: 'CLEAR_NOTIFICATION', NotificationId },
    setusername: (username: string) => <SetUsernameAction>{ type: 'SET_USERNAME', username },
    clearusername: () => <SetUsernameAction>{ type: 'SET_USERNAME' }
}


//REDUCER
export const reducer: Reducer<UserStatusState> = (state: UserStatusState = initialState, action: KnownAction) => {
    switch (action.type) {
        case ('SET_USERNAME'):
            return Object.assign({}, state, { Username: action.username })
        case ('CLEAR_USERNAME'):
            return Object.assign({}, state, { Username: '' })
        case ('CLEAR_NOTIFICATION'):
            for (var i = 0; i < state.UserNotifications.length; i++) {
                if (state.UserNotifications[i].NotificationId === action.NotificationId) {
                    return Object.assign({}, state, {
                        UserNotifications: [
                            state.UserNotifications.slice(0, i),
                            state.UserNotifications.slice(i, state.UserNotifications.length)
                        ]
                    });
                }
            }
            return state
        default:
            const exhaustiveCheck: never = action;
    }
    return state || Object.assign({}, state, initialState);
}