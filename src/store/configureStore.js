/**
 * Created by Yooz on 2017/7/11.
 */

import {createStore} from 'redux'
import rootReducer from './../reducers'

export default function configureStore(initialState) {
    const store = createStore(rootReducer,initialState,
    window.devToolsExtension?window.devToolsExtension():undefined)

    return store;
}