import React , { Component } from 'react'

import './WeatherBox.css'

class WeatherBox extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="weather-box">
                <div className="head">
                    <h1>{this.props.data.city}</h1>
                    <h6>{this.props.data.country}</h6>
                </div>
                <div className="content">
                    <h3>tempreture : {this.props.data.temp}C </h3>
                    <h3>wind : {this.props.data.wind} </h3>
                    <h3>pressure : {this.props.data.pres} </h3>
                    <h3>humidity : {this.props.data.humd} </h3>
                </div>
            </div>
        )
    }

}

export default WeatherBox ;