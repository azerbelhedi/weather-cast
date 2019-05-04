import React , { Component } from 'react' 
import './App.css'

import TopBar from '../TopBar/TopBar'
import WeatherBox from '../WeatherBox/WeatherBox'

class App extends Component{
    constructor(props){
        super(props) 
        this.state = {
            cities : [
                {
                    country : "Tunisia" ,
                    city : "Sousse" ,
                    temp : 20 ,
                    wind : 10 ,
                    pres : 5 ,
                    humd : '10%'
                } ,
                {
                    country : "Tunisia" ,
                    city : "Sousse" ,
                    temp : 20 ,
                    wind : 10 ,
                    pres : 5 ,
                    humd : '10%'
                }
            ]
        }
        this.addCity = this.addCity.bind(this)
    }

    addCity(data){
        const apiKey = "bb7d4ee588eaaacf0f0272bc04c56547" 
        const endPoint = "http://api.openweathermap.org"

        const link = `${endPoint}/data/2.5/weather?q=${data.city},${data.country}&APPID=${apiKey}` ;

        fetch(link)
        .then(response => {response.json()})
        .then(res => {
            console.log(res)
        })
        .catch(error => {console.log(error)})

        let state = this.state 
        state.cities.push(data) ;
        this.setState(state)
        console.log(this.state)
    }

    render(){
        return(
            <div className = "app">
                <TopBar data = {{addCity : this.addCity}}/>
                <div className = "weather-section">
                    {this.state.cities.map(data => {
                        return (
                            <WeatherBox data = {data}/>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default App 