import React, { Component } from "react";

class Box1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // destructuring of props
    const { values, handleC } = this.props;
    //console.log(this.props);

    return (
      <div className="box container ">
        <h1>Personal Details</h1>

        <p>First Name</p>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={handleC("fname")}
          defaultValue={values.fname}
        />

        <p>Last Name</p>
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={handleC("lname")}
          defaultValue={values.lname}
        />

        <p>Contact Number</p>
        <input
          type="text"
          placeholder="Enter your Contact no."
          onChange={handleC("mobile")}
          defaultValue={values.mobile}
        />
        <br />
        <button onClick={this.props.cclick} className="myBtn">
          Continue
        </button>
      </div>
    );
  }
}

export default Box1;
