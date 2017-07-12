/**
 * Created by Yooz on 2017/7/12.
 */
import React, {Component} from 'react';


class B extends Component{
    render(){
        return(
            <p>{this.props.userinfo.city}</p>
        )
    }
}

export default B