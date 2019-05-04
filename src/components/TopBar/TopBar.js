import React , { Component } from 'react'
import './TopBar.css'

class TopBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            input : "" ,
            city : "" ,
            country : ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.addCity = this.addCity.bind(this)
    }

    handleInputChange(e){
        let state = this.state 
        state.input = e.target.value 
        this.setState(state) 
        console.log(this.state.input)
    }

    addCity(){
        let data = this.state.input.split(" ") ;
        let state = this.state ;
        state.country = data[0] 
        state.city = data[1] 
        this.setState(state) 
        //console.log(data) ;
        this.props.data.addCity({city : this.state.city , country : this.state.country}) ;
    }

    render(){
        return(
            <div className="top-bar">
                <input placeholder = "tunisia sousse " className = "city-input" type="text" onChange = {e =>
                    {this.handleInputChange(e)}
                    }/>
                <button className = "add-city-button" onClick = {() => 
                    {this.addCity()}
                } >Add City</button>
            </div>
        )
    }
}

export default TopBar 