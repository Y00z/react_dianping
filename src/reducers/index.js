/**
 * Created by Yooz on 2017/7/11.
 */
import {combineReducers} from 'redux'
import userinfo from './../reducers/userinfo'

const rootReducer = combineReducers({
    userinfo : userinfo
})

export default rootReducer