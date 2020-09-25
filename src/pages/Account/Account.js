import React, {useEffect, useState} from 'react'
import {
      BrowserRouter as Router,
      Switch,
      Route,
    } from "react-router-dom";
    import AccountSideBar from "./AccountSideBar";
    import Bookings from "./Bookings";
    import ChangePassword from "./ChangePassword";
    import axios from 'axios';
    import moment from 'moment';
    import { useSelector } from 'react-redux'

    function Account(props) {

    const token = useSelector(state => state.auth.token);

    const [ pastBookings, setPastBookings ] = useState([]);
    const [upcomingBookings, setUpcomingBookings] = useState([]);

    useEffect(()=>{
        const accountUrl = `${window.apiHost}/users/getBookings`;
        const data = {
            token: token,
        }

        const fetchAccountData = async()=>{
            const resp = await axios.post(accountUrl,data);
            console.log(resp.data);
            let pastBookings = []
            let upcomingBookings = [];
            resp.data.forEach(booking => {
                const today = moment(); //get today's date so we know what is past and what is future
                const checkOutDate = moment(booking.checkOut);
                const diffDays = checkOutDate.diff(today,"days");
                if(diffDays < 0){
                    pastBookings.push(booking);
                }else{
                    upcomingBookings.push(booking);
                }
            });
            setPastBookings(pastBookings);
            setUpcomingBookings(upcomingBookings);
        }

        fetchAccountData();
    },[])

    return (
      <div className="account container-fluid">
        <Router>
          <div >
              <AccountSideBar />
              <div className="row">
                        <div className="col s8 offset-s3">
                                <Switch>
                                    <Route exact path="/account"
                                        render={()=>
                                            <h1>Choose an option on the left!</h1>
                                        } />
                                
                                        <Route exact path="/account/reservations/confirmed" render={()=>
                                            <Bookings type="upcoming" bookings={upcomingBookings} token={token} />
                                        } />
                                        <Route exact path="/account/reservations/past">
                                            <Bookings type="past" bookings={pastBookings} />
                                        </Route>
                                        <Route exact path="/account/change-pass" component={ChangePassword} />
                                </Switch>
                        </div>
              </div>
          </div>
        </Router>
      </div>
    );
}

export default Account;


// import React, { Component } from "react";
// // import { render } from "react-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import AccountSideBar from "./AccountSideBar";
// import Bookings from "./Bookings";
// import ChangePassword from "./ChangePassword";
// import axios from 'axios';
// import moment from 'moment';
// import { connect } from 'react-redux'



// class Account extends Component {
 
//     state = {
//         pastBookings: [],
//         upcomingBookings: [],
//     }

//     async componentDidMount(){
//         const accountUrl = `${window.apiHost}/users/getBookings`;
//         const data = {
//             token: this.props.auth.token,
//         }
//         const resp = await axios.post(accountUrl,data);
//         console.log(resp.data);
//         let pastBookings = []
//         let upcomingBookings = [];
//         resp.data.forEach(booking => {
//             const today = moment(); //get today's date so we know what is past and what is future
//             const checkOutDate = moment(booking.checkOut);
//             const diffDays = checkOutDate.diff(today,"days");
//             if(diffDays < 0){
//                 pastBookings.push(booking);
//             }else{
//                 upcomingBookings.push(booking);
//             }
//         });
//         this.setState({
//             pastBookings,
//             upcomingBookings,
//         })
//     }

//   render() {
//     const { pastBookings, upcomingBookings } = this.state;
//     return (
//       <div className="account container-fluid">
//         <Router>
//           <div >
//               <AccountSideBar />
//               <div className="row">
//                         <div className="col s8 offset-s3">
//                                 <Switch>
//                                     <Route exact path="/account"
//                                         render={()=>
//                                             <h1>Choose an option on the left!</h1>
//                                         } />
                                
//                                         <Route exact path="/account/reservations/confirmed" render={()=>
//                                             <Bookings type="upcoming" bookings={upcomingBookings} token={this.props.auth.token} />
//                                         } />
//                                         <Route exact path="/account/reservations/past">
//                                             <Bookings type="past" bookings={pastBookings} />
//                                         </Route>
//                                         <Route exact path="/account/change-pass" component={ChangePassword} />
//                                 </Switch>
//                         </div>
//               </div>
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state){
//     return{
//         auth: state.auth,
//     }
// }

// export default connect(mapStateToProps)(Account);