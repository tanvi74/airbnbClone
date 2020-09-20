import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';

import AccountSideBar from './AccountSideBar';
import Bookings from "./Bookings";
import ChangePassword from "./ChangePassword";
import './Account.css';

// import axios from 'axios';
// import moment from 'moment';

class Account extends Component {

    state = {
        pastBookings: [],
        upcomingBookings: []
    }

    async componentDidMount(){

    }

    render() {
        return (
            <div className="account container-fluid">
                <AccountSideBar p="helo"/>
                <div className="row">
                    <div className="col s8 offset-s3">

                        <Route exact path="/account" render={()=>
                            <h1>Choose an option on the left!</h1>
                        }/>

                        <Route exact path="/account/reservations/confirmed" component={Bookings} />
                        <Route exact path="/account/reservations/past" component={Bookings} />
                        <Route exact path="/account/change-pass" component={ChangePassword} />

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Account);
