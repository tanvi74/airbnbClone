import React, { Component } from 'react'
import './CityVenue.css';
import axios from 'axios';
import Spinner from '../../utility/Spinner/Spinner';
import Venues from '../../utility/Venue/Venues'

export default class CityVenue extends Component {

    state = {
        venues: [],
        header: ""
    }

    async componentDidMount(){
        const cityName = this.props.match.params.cityName;
        const url = `${window.apiHost}/venues/city/${cityName}`;
        const resp = await axios.get(url,{cityName});
        console.log(resp.data);
        this.setState({
            venues: resp.data,
            header: resp.data.header
        })
    }

    render() {
        console.log(this.state.header);
        console.log(this.state.venues);
        if(!this.state.header){
            return <Spinner />
        }
        return (
            <div className="row">
                    <Venues venues={this.state.venues} header={this.state.header} />
            </div>
        )
    }
}
