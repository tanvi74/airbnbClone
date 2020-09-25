import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../Home/Home.css';
import Spinner from '../../utility/Spinner/Spinner';
import Cities from '../../utility/City/Cities';
import Activities from '../../utility/Activity/Activities';
import Venues from '../../utility/Venue/Venues'

export default function Search(props) {

    const [activities, changeActivities ] = useState([]);
    const [cities, changeCities] = useState([]);
    const [venues, changeVenues] = useState([]);
    const [apiResponse, changeApiResponse] = useState(false);

    useEffect(()=>{
        
        const fetchData = async() => {
            const searchTerm = props.match.params.searchTerm;
            const url = `${window.apiHost}/search/${searchTerm}`;
                    const resp = await axios.get(url);
                    changeActivities(resp.data.activities)
                    changeCities(resp.data.cities);
                    changeVenues(resp.data.venues);
                    changeApiResponse(true);

        }
        fetchData();       
    },[])

    if(!apiResponse)
            return <Spinner />
        return (
            <div className="container-fluid lower-fold">
                <div className="row">
                    <div className="col s12">
                        <Cities cities={cities} header="Cities matching your Search"/>
                    </div>
                    <div className="col s12">
                        <Activities activities={activities} header="Activities matching your Search"/>
                    </div>
                    <div className="col s12">
                        <Venues venues={venues} header="Venues matching your Search"/>
                    </div>
                </div>
            </div>
        )
    }




// import React, { Component } from 'react'
// import axios from 'axios'
// import '../Home/Home.css';
// import Spinner from '../../utility/Spinner/Spinner';
// import Cities from '../../utility/City/Cities';
// import Activities from '../../utility/Activity/Activities';
// import Venues from '../../utility/Venue/Venues'


// export default class Search extends Component {

//     state = {
//         activities: [],
//         cities: [],
//         venues: [],
//         apiResponse: false
//     }

//     async componentDidMount(){
//         const searchTerm = this.props.match.params.searchTerm;
//         const url = `${window.apiHost}/search/${searchTerm}`;
//         const resp = await axios.get(url);
//         this.setState({
//             activities: resp.data.activities,
//             cities: resp.data.cities,
//             venues: resp.data.venues,
//             apiResponse: true
//         })

//     }


//     render() {
//         if(!this.state.apiResponse)
//             return <Spinner />
//         return (
//             <div className="container-fluid lower-fold">
//                 <div className="row">
//                     <div className="col s12">
//                         <Cities cities={this.state.cities} header="Cities matching your Search"/>
//                     </div>
//                     <div className="col s12">
//                         <Activities activities={this.state.activities} header="Activities matching your Search"/>
//                     </div>
//                     <div className="col s12">
//                         <Venues venues={this.state.venues} header="Venues matching your Search"/>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
