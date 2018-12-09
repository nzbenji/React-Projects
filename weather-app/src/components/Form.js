import React from "react";
import '../css/Form.css';

class Form extends React.Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.weather}>
          <input className="input" type="text" name="city" placeholder="city.." />
          <input className="input country" type="text" name="country" placeholder="country.." />
          <button className="button">Get weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
