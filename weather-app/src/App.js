import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends Component {

  state = {
    tempMin: "",
    tempMax: "",
    city: "", 
    country: "",
    conditions: "",
    icon: undefined,
    loading: true,
    error: undefined
  }

  getWeather = (e) => {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    //Data will not display without this
    e.preventDefault()

    const API_KEY = "134bdee599fe71b8287e371b7a78e356";
    const ENDPOINT_URL = "http://api.openweathermap.org";
    const API_CALL = `${ENDPOINT_URL}/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`

    fetch(API_CALL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        if(city && country) {
        this.setState({
          tempMin: data.main.temp_min + "c",
          tempMax: data.main.temp_max + "c",
          city: data.name,
          country: data.sys.country,
          conditions: data.weather[0].description,
          icon: data.weather[0].icon,
          //without loading, we get an error as props.conditions is trying to load the image before the api returns the data
          loading: false,
          error: ''
        })
      } else { //Catch an error so we app doesn't crash if no value is entered
        this.setState({
          error: "Please enter required values"
        })
      }
      })

  };
  render() {
    return (
      <div >
        <Form weather={this.getWeather} />

        {/* Nothing should be returned until data is returned from fetching */}
        { this.state.loading ? '' 
          : <Weather 
          tempMin = { this.state.tempMin }
          tempMax = { this.state.tempMax }
          city = { this.state.city }
          country = { this.state.country }
          conditions = { this.state.conditions }
          icon = { this.state.icon }
          error = { this.state.error }
        />
    }
      </div>
    );
  }
}

export default App;

