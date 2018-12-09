import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.weather}>
          <input type="text" name="city" placeholder="city" />
          <input type="text" name="country" placeholder="country" />
          <button>Get weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
