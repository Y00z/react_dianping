/**
 * Created by Yooz on 2017/7/11.
 */
import * as actionTypes from './../constants/userinfo'


const initialState = {}
export default function userinfo(state = initialState, action) {
    switch (action.type){
        //登录
        case actionTypes.USERINFO_LOGIN:
            return action.data
        //修改城市
        case actionTypes.UPDATE_LOGIN:
            return action.data
        default:
            return state
    }
}