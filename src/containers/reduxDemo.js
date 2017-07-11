/**
 * Created by Yooz on 2017/7/11.
 */

import {createStore} from 'redux'

export default function () {
    //第一部：定义规则reducer  //state如果null 就等于0
    function counter(state = 0, action) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1
            case 'DECREMENT':
                return state - 1
            default:
                return state
        }
    }

    //第二部：通过规则生成store
    let store = createStore(counter)

    //第三部：监听 state改变就执行
    store.subscribe(() =>
        console.log(store.getState())
    )

    //第四部：触发数据变化
    store.dispatch({ type: 'INCREMENT' })
    store.dispatch({ type: 'INCREMENT' })
    store.dispatch({ type: 'DECREMENT' })
}