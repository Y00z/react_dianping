/**
 * Created by Yooz on 2017/7/12.
 */
import React, {Component} from 'react';


class C extends Component{
    render(){
        return(
            <div>
                <button onClick={this.changeUserInfo.bind(this)}>修改</button>
            </div>
        )
    }

    changeUserInfo(){
        const actions = this.props.actions
        actions.login({
            userid:'998',
            city:'dongjing'
        })
    }
}


export default C