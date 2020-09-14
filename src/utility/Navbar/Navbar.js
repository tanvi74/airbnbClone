import React from 'react';
import {Link} from 'react-router-dom'
import "./Navbar.css";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import openModal from '../../Actions/openModal';

class Navbar extends React.Component{
    render(){

        let navColor = 'transparent'
        if(this.props.location.pathname !== '/'){
            // then user is on homepage
            navColor = 'black'
        }

        return (
            <>
            <div className="container-fluid nav">
                <div className="row">
                    <nav className={navColor}>
                        <div className="nav-wrapper">
                            <Link to="/" className="left">airbnb</Link>
                            <ul className="right" id="nav-mobile">
                                <li><Link to="#">English (US)</Link></li>
                                <li><Link to="#">$ USD</Link></li>
                                <li><Link to="#">Become a Host</Link></li>
                                <li><Link to="#">Help</Link></li>
                                <li><Link to="#">Sign Up</Link></li>
                                <li onClick={()=>{this.props.openModal("open", "Log in")}}>Log in</li>
                            </ul>
                        </div>
                    </nav>
                </div>            
            </div>
            </>
        )
    }
    
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        openModal: openModal
    },dispatch)
}

export default connect(null,mapDispatchToProps)(Navbar);