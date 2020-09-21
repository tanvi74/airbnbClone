import React, { Component } from 'react'
import axios from 'axios'
import '../Home/Home.css';
import Spinner from '../../utility/Spinner/Spinner';
import Cities from '../../utility/City/Cities';
import Activities from '../../utility/Activity/Activities';
import Venues from '../../utility/Venue/Venues'


export default class Search extends Component {

    state = {
        activities: [],
        cities: [],
        venues: [],
        apiResponse: false
    }

    async componentDidMount(){
        const searchTerm = this.props.match.params.searchTerm;
        const url = `${window.apiHost}/search/${searchTerm}`;
        const resp = await axios.get(url);
        this.setState({
            activities: resp.data.activities,
            cities: resp.data.cities,
            venues: this.state.venues,
            apiResponse: true
        })

    }


    render() {
        if(!this.state.apiResponse)
            return <Spinner />
        return (
            <div className="container-fluid lower-fold">
                <div className="row">
                    <div className="col s12">
                        <Cities cities={this.state.cities} header="Cities matching your Search"/>
                    </div>
                    <div className="col s12">
                        <Activities activities={this.state.activities} header="Activities matching your Search"/>
                    </div>
                    <div className="col s12">
                        <Venues venues={this.state.venues} header="Venues matching your Search"/>
                    </div>
                </div>
            </div>
        )
    }
}
