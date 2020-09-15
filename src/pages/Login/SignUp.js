import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import openModal from '../../Actions/openModal';
import Login from './Login';
import './Login.css';

class SignUp extends Component{

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
                    <button className="sign-up-button">Sign up with email</button>
                    <div className="divider"></div>
                    <div>Already have an account? <span className="loginSignUp" onClick={()=>{this.props.openModal('open', <Login/>)}}>Login</span></div>
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

export default connect(null,mapDispatchToProps)(SignUp);