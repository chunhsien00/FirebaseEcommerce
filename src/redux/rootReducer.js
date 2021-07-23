import { combineReducers } from 'redux'

import userReudcer from './User/user.reducers'

export default combineReducers({
    user: userReudcer
})

