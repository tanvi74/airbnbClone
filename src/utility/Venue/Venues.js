import React,{Component} from 'react';
import './Venue.css';
import Venue from './Venue'


class Venues extends Component{
    render(){
        // console.log(this.props.venues.venues);
        var venues
        if(this.props.venues.venues !== undefined){
             venues = this.props.venues.venues.map((venue,i)=>{
                // console.log(venue);
                return(
                    <div key={i} className="col m6 l3 s12">
                        <Venue venue={venue}/>
                    </div>
                )
            })
        }
        
        return(
            <div className="venues">
                <h1 className="main-header-text">{this.props.header}</h1>
                {venues}
            </div>
        )
    }
}

export default Venues;