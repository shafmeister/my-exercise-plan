import { Action, Reducer } from 'redux';

//STATE
export interface UserStatusState {
    Username: string,
    NotificationCount: number
}

//
const initialState = { Username: '', NotificationCount: 0}

//ACTIONS
interface DecrementNotificationAction { type: 'DECREMENT_NOTIFICATIONCOUNT' }
interface ClearNotificationAction { type: 'CLEAR_NOTIFICATIONCOUNT' }
interface SetUsernameAction { type: 'SET_USERNAME', username: string }


//Known action type, to exclude unknown action calls
type KnownAction = DecrementNotificationAction | ClearNotificationAction | SetUsernameAction;


//ACTION CREATORS
export const actionCreators = {
    decrement: () => <DecrementNotificationAction>{ type: 'DECREMENT_NOTIFICATIONCOUNT' },
    clear: () => <ClearNotificationAction>{ type: 'CLEAR_NOTIFICATIONCOUNT' },
    setusername: (username: string) => <SetUsernameAction>{ type: 'SET_USERNAME', username }
}


//REDUCER
export const reducer: Reducer<UserStatusState> = (state: UserStatusState = initialState, action: KnownAction) => {
    switch (action.type) {
        case ('DECREMENT_NOTIFICATIONCOUNT'):
            return Object.assign({}, state, { NotificationCount: state.NotificationCount - 1 } ) 
        case ('CLEAR_NOTIFICATIONCOUNT'):
            return Object.assign({}, state, { NotificationCount: 0 }) 
        case ('SET_USERNAME'):
            return Object.assign({}, state, {Username: action.username})
        default:
            const exhaustiveCheck: never = action;
    }
    return state || Object.assign({}, state, { NotificationCount: 0 }) ;
}