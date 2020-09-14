import React, {Component} from 'react';

class Activity extends Component{
    render(){
        const { activityType, cost, id, image, rating, title, totalRating} = this.props.activity;
        return(
            <div className="Activity">
                <img src={image} />
                <div className="activity-type">{activityType}</div>
                <div className="title">{title}</div>
                <div className="cost">From ${cost}/person</div>
                <div className="rating">{rating} ({totalRating})</div>
            </div>
        )
    }
}

export default Activity;