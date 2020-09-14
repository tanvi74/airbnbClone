import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import SlickSlider from 'react-slick';

class Slider extends React.Component{
    
    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true 
          };
        return(
            <div className="slick">
                <h1 className="main-header-text">{this.props.header}</h1>
                <SlickSlider {...settings}>
                    {this.props.elements}
                </SlickSlider>
            </div>
        )
    }
}

export default Slider;