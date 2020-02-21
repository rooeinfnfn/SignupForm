import React, { Component } from "react";

class Box3 extends Component {
  state = {};
  render() {
    // console.log(this.props.page);
    const { values } = this.props;
    return (
      <div className="box container">
        <h1>Confirm Details</h1>
        {/* <br /> */}
        <p>First Name : {values.fname}</p>

        <p>Last Name : {values.lname}</p>

        <p>Contact No. : {values.mobile}</p>

        <p>Email-id : {values.email}</p>

        <p>Github username : {values.gitUser}</p>

        <p>Codechef Handle : {values.codeChef}</p>

        <br />
        <button onClick={this.props.bclick} className="myBtn">
          Back
        </button>
        <button onClick={this.props.cclick} className="myBtn">
          Submit
        </button>
      </div>
    );
  }
}

export default Box3;
