/**
 * Created by Yooz on 2017/7/12.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userinfoActions from './../actions/userinfo'
import A from './a'
import B from './b'
import C from './c'

class ReactRedux extends Component {
    render() {
        return (
            <div>
                <A userinfo={this.props.userinfo}/>
                <hr/>
                <B userinfo={this.props.userinfo}/>
                <hr/>
                <C actions={this.props.userinfoActions}/>
            </div>
        )
    }

    componentDidMount() {
        //模拟初始化
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing'
        })
    }
}

//两个必须要的东西
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactRedux);
