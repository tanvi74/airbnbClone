import React, {Component} from 'react';
import './Login.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import openModal from '../../Actions/openModal';
import SignUp from './SignUp';
import axios from 'axios';
import swal from 'sweetalert';
import regAction from '../../Actions/regAction';

class Login extends Component{

    state = {
        email: "",
        password: ""
    }

    submitLogin = async(e) =>{
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        const url = `${window.apiHost}/users/login`;
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        const resp = await axios.post(url,data);
        console.log(resp.data);
        // -- noEmail
        if(resp.data.msg === "noEmail"){
            swal({
                title: "That email is not registered.",
                icon: "error",
              })
        // -- badPass
        }else if(resp.data.msg === "badPass"){
            swal({
                title: "Invalid email/password",
                text: "We don't have a match for that user name and password.",
                icon: "error",
              })
        // -- loggedIn
        }else if(resp.data.msg === "loggedIn"){
            swal({
                title: "Success!",
                icon: "success",
              });
            // we call our register action to update our auth reducer!!
            this.props.regAction(resp.data);
        }

         
            
        }

    changeEmail = (e) =>{
        this.setState({
            email: e.target.value
        })
    }

    changePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }

    render(){
        console.log(this.props.auth);
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    <input type="text" className="browser-default" placeholder="Email address" onChange={this.changeEmail}/>
                    <input type="password" className="browser-default" placeholder="Password" onChange={this.changePassword}/>
                    <button className="sign-up-button">Login</button>
                    <div className="divider"></div>
                    <div>Don't have an account?<span className="loginSignUp" onClick={()=>{this.props.openModal('open', <SignUp/>)}}> Sign up</span> </div>
                </form>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        openModal: openModal,
        regAction: regAction
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);