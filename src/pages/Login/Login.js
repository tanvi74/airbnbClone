import React, {Component} from 'react';
import './Login.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import openModal from '../../Actions/openModal';
import SignUp from './SignUp';

class Login extends Component{

    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    <input type="text" className="browser-default" placeholder="Email address" />
                    <input type="password" className="browser-default" placeholder="Password" />
                    <button className="sign-up-button">Login</button>
                    <div className="divider"></div>
                    <div>Don't have an account?<span className="loginSignUp" onClick={()=>{this.props.openModal('open', <SignUp/>)}}>Sign up</span> </div>
                </form>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        openModal: openModal
    },dispatch)
}

export default connect(null,mapDispatchToProps)(Login);