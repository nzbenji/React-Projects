import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends Component {

  state = {
    temp: undefined,
    city: undefined, 
    country: undefined,
    error: undefined
  }

  getWeather = (e) => {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    e.preventDefault()

    const API_KEY = "134bdee599fe71b8287e371b7a78e356";
    const ENDPOINT_URL = "http://api.openweathermap.org";
    const API_CALL = `${ENDPOINT_URL}/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`

    fetch(API_CALL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          error: ''
        })
      })
  };
  render() {
    return (
      <div>
        <Form weather={this.getWeather} />
        <Weather 
          temp = { this.state.temp }
          city = { this.state.city }
          country = { this.state.country }
          error = { this.state.error }
        />
      </div>
    );
  }
}

export default App;

// getWeather = async (e) => {

//   e.preventDefault();

//   const API_KEY = '134bdee599fe71b8287e371b7a78e356'
//   const ENDPOINT_URL = 'http://api.openweathermap.org'
//   const API_CALL = await fetch( `${ENDPOINT_URL}/data/2.5/weather?q=london,uk&appid=${API_KEY}` )
//   const response = await API_CALL.json()
//   console.log(response)
// }
